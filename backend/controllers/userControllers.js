import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import { generateToken } from '../utils/generateToken.js'
import dotenv from 'dotenv'

dotenv.config()

const getUserRole = (role) => {
  switch (role) {
    case process.env.ADMIN_ROLE:
      return 'Admin'
    case process.env.EMPLOYEE_ROLE:
      return 'Employee'
    default:
      return 'Unspecified User'
  }
}

// User Controllers
// CRUD operations
// userLogin - login user
// userLogout - logout user
// userRegister - register user
// getUsers - get all users
// getUserById - get user by id
// getUserProfile - get user profile
// updateUserProfile - update user profile
// deleteUser - delete user

//@desc     Auth a user and get a token
//@route    POST /api/users/login
//@access   Public
export const userLogin = asyncHandler(async (req, res) => {
  // find a user based on email
  const { email, password } = req.body

  // console.log('backend', email, password)

  const user = await User.findOne({ email })

  // authenticate the user
  if (user && (await user.matchPassword(password))) {
    // return response token with user to frontend client
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: getUserRole(user.role),
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

//@desc     Log out a user
//@route    GET /api/users/logout
//@access   Public
export const userLogout = asyncHandler(async (req, res) => {
  res.clearCookie('userInfo')
  res.json({ message: 'Logout success' })
})

//@desc     Register a new user
//@route    POST /api/users
//@access   Public
export const userRegister = asyncHandler(async (req, res) => {
  // console.log(req.body)
  const { name, email, password } = req.body

  // console.log('backend', name, email, password)

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
    role: process.env.EMPLOYEE_ROLE,
    department: 'Web Development',
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: getUserRole(user.role),
      department: user.department,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Get all users
// @route   GET /api/users
// @access  Public
export const getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find({}, '', {
    sort: { name: 1 },
  })
    .select('-password')
    .select('-__v')
    .select('-createdAt')
    .select('-updatedAt')
    .populate('reports')

  if (users) {
    // only sending the most recent created report
    const usersWithReports = users.map((user) => {
      const userWithReports = user.toObject()
      userWithReports.reports = user.reports.sort((a, b) => {
        return new Date(b.start_date) - new Date(a.start_date)
      })

      // get only the first report
      if (userWithReports.reports[0]) {
        userWithReports.recently_created_report_id =
          userWithReports.reports[0]._id
        userWithReports.recently_created_report_date =
          userWithReports.reports[0].start_date
      } else {
        userWithReports.recently_created_report_id = null
        userWithReports.recently_created_report_date = null
      }

      return userWithReports
    })

    res.status(200).json(usersWithReports)
  } else {
    res.status(404)
    throw new Error('Users not found')
  }
})

// @desc    Get only employee users
// @route   GET /api/users/employees
// @access  Admin & Associate
export const getEmployees = asyncHandler(async (req, res, next) => {
  const employees = await User.find({ department: 'Web Development' })
    .select('-hashed_password')
    .select('-salt')
    .select('-__v')
    .select('-updatedAt')

  if (employees) {
    res.json(employees)
  } else {
    res.status(404)
    throw new Error('Employees not found')
  }
})

// @desc    Get a user by id
// @route   GET /api/users/:id
// @access  Private / Admin
export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
    .select('-hashed_password')
    .select('-salt')
    .select('-updatedAt')
    .select('-__v')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc     Get a user profile
// @route    GET /api/users/:id/profile
// @access   Private
export const getUserProfile = asyncHandler(async (req, res) => {
  // console.log('req.user._id', req.user._id)
  // console.log('req.params.id', req.params.id)
  if (req.user._id == req.params.id) {
    const user = await User.findById(req.params.id)

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        role: user.role,
        project: user.project,
        email: user.email,
        dateofjoin: user.dateofjoin,
        department: user.department,
        gender: user.gender,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  } else {
    res.status(401)
    throw new Error('User not authorized')
  }
})

// @desc    Update user profile
// @route   PUT /api/users/:id/
// @access  Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  if (req.user._id == req.params.id) {
    const user = await User.findById(req.params.id)

    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      user.about = req.body.about || user.about
      if (req.body.password) {
        user.password = req.body.password
      }

      const updatedUser = await user.save()

      if (updatedUser) {
        res.json({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          about: updatedUser.about,
          role: updatedUser.role,
          history: updatedUser.history,
          createdAt: updatedUser.createdAt,
        })
      } else {
        res.status(400)
        throw new Error('User not updated')
      }
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  } else {
    res.status(401)
    throw new Error('User not authorized')
  }
})

// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  Private
export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.status(200).json({
      message: 'User deleted',
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})
