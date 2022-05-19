import mongoose from 'mongoose'

const reportSchema = new mongoose.Schema(
  {
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    satisfactory_score: {
      type: Number,
      required: true,
    },
    hours_worked: {
      type: Number,
      required: true,
    },
    remarks: {
      type: String,
      required: true,
    },
    is_received: {
      type: Boolean,
      default: false,
    },
    is_approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Report = mongoose.model('Report', reportSchema)
export default Report
