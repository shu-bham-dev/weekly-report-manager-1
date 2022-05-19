import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom'

import { register } from '../actions/userActions'

const Signup = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  // const redirect = location.search ? location.search.split('=')[1] : '/'

  // let history = useHistory()

  // useEffect(() => {
  //   if (userInfo) {
  //     setMessage('Registered successfully! Redirecting to the home page...')
  //     history.push('/')
  //   }
  // }, [history, userInfo])

  const signupHandler = (event) => {
    event.preventDefault()

    history.push('/')

    // if (password !== confirmPassword) {
    //   setMessage('Passwords do not match')
    //   alert('Passwords do not match')
    // } else {
    //   // dispatch the register action
    //   dispatch(register(name, email, password))
    // }
  }

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <h1 className='title'>Signup</h1>
        </div>
        <form className='form-wrapper'>
          <div className='name'>
            {/* NAME */}
            <label className='label'>Full Name</label>
            <input
              className='input'
              type='text'
              name='name'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          {/* Email */}
          <div className='email'>
            <label className='label'>Email</label>
            <input
              className='input'
              type='email'
              name='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          {/* Password */}
          <div className='password'>
            <label className='label'>Password</label>
            <input
              className='input'
              type='text'
              name='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {/* Password */}
          <div className='password'>
            <label className='label'>Confirm Password</label>
            <input
              className='input'
              type='text'
              name='confirmPassword'
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>

          <div>
            <button className='submit' onClick={signupHandler}>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
