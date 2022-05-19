import express from 'express'
import { getEmployees } from '../controllers/userControllers.js'
import { isAuth, isAdmin } from '../middlewares/authMiddlewares.js'

const router = express.Router()

router.route('/').get(getEmployees)

export default router
