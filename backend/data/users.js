import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

const users = [
  {
    name: 'Admin',
    email: 'admin@atc.com',
    password: bcrypt.hashSync('Admin', 10),
    role: process.env.ADMIN_ROLE,
    department: 'Administration',
  },
  {
    name: 'Alok Baluni',
    email: 'alok@atc.com',
    role: process.env.EMPLOYEE_ROLE,
    password: bcrypt.hashSync('Employee', 10),
    department: 'Web Development',
  },
  {
    name: 'Anshul Verma',
    email: 'anshul@atc.com',
    role: process.env.EMPLOYEE_ROLE,
    password: bcrypt.hashSync('Employee', 10),
    department: 'Web Development',
  },
  {
    name: 'Anurag Singh',
    email: 'anurag@atc.com',
    role: process.env.EMPLOYEE_ROLE,
    password: bcrypt.hashSync('Employee', 10),
    department: 'Web Development',
  },
  {
    name: 'Disharna Das',
    email: 'disharna@atc.com',
    role: process.env.EMPLOYEE_ROLE,
    password: bcrypt.hashSync('Employee', 10),
    department: 'Web Development',
  },
  {
    name: 'Khushboo Mudgal',
    email: 'khushboo@atc.com',
    role: process.env.EMPLOYEE_ROLE,
    password: bcrypt.hashSync('Employee', 10),
    department: 'Web Development',
  },
  {
    name: 'Lovish Sethi',
    email: 'lovish@atc.com',
    role: process.env.EMPLOYEE_ROLE,
    password: bcrypt.hashSync('Employee', 10),
    department: 'Web Development',
  },
  {
    name: 'Raghvendra Singh',
    email: 'raghvendra@atc.com',
    role: process.env.EMPLOYEE_ROLE,
    password: bcrypt.hashSync('Employee', 10),
    department: 'Web Development',
  },
  {
    name: 'Subham Sahu',
    email: 'subham@atc.com',
    role: process.env.EMPLOYEE_ROLE,
    password: bcrypt.hashSync('Employee', 10),
    department: 'Web Development',
  },
  {
    name: 'Ujjal Khadka',
    email: 'ujjal@atc.com',
    role: process.env.EMPLOYEE_ROLE,
    password: bcrypt.hashSync('Employee', 10),
    department: 'Web Development',
  },
]

export default users
