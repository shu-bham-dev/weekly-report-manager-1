import express from 'express'
import {
  createReport,
  deleteReport,
  getRecentReportByUserId,
  getReportById,
  getReports,
  getReportsByUserId,
  updateReport,
} from '../controllers/reportControllers.js'

// import { isAuth, isAdmin } from '../middlewares/authMiddlewares'

const router = express.Router()

router.route('/').get(getReports).post(createReport)
// router.route("/").get(isAuth, isAdmin, getReports);

router.route('/:id').get(getReportById).put(updateReport).delete(deleteReport)
router.route('/user/:id').get(getReportsByUserId)
router.route('/recent/user/:id').get(getRecentReportByUserId)

export default router
