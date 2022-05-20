// not really needed for the production level app...
// just to load or seed some dummy data into the database
// can be deleted...
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import User from './models/userModel.js'
import Report from './models/reportModel.js'

import users from './data/users.js'
import reports from './data/reports.js'

import { connectDB } from './utils/dbConfig.js'

dotenv.config()

connectDB()

const seedData = async () => {
  try {
    console.log('\nSeeding Data...\n'.green.inverse)
    await User.deleteMany()
    await Report.deleteMany()

    await User.insertMany(users)
    await Report.insertMany(reports)

    console.log('\nData Seeded...\n'.green.underline)
    process.exit()
  } catch (error) {
    console.error(`${error.message}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany()
    await Report.deleteMany()

    console.log('Data Destroyed...'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error.message}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') destroyData()
else seedData()
