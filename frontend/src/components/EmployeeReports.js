import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getUserDetails } from '../actions/userActions'

import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { display } from '@mui/system'

import UserCard from './UserCard.js'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const reports = [
  {
    _id: '1',
    start_date: '2020-01-01',
    end_date: '2020-01-07',
    // user_id: '5e2f8f9b9c8f8b1c8c8f8f8f',
    task: 'Node Test',
    description:
      'The test was very competitive and hard, but the trainees managed to overcome it.',
    satisfactory_score: 2,
    hours_worked: 47,
    remarks: "That's very positive...",
    is_received: true,
    is_approved: true,
  },
  {
    _id: '2',
    start_date: '2020-01-01',
    end_date: '2020-01-07',
    // user_id: '5e2f8f9b9c8f8b1c8c8f8f8f',
    task: 'Node Test',
    description:
      'The test was very competitive and hard, but the trainees managed to overcome it.',
    satisfactory_score: 2,
    hours_worked: 47,
    remarks: '',
    is_received: false,
    is_approved: false,
  },
  {
    _id: '3',
    start_date: '2020-01-01',
    end_date: '2020-01-07',
    // user_id: '5e2f8f9b9c8f8b1c8c8f8f8f',
    task: 'Node Test',
    description:
      'The test was very competitive and hard, but the trainees managed to overcome it.',
    satisfactory_score: 2,
    hours_worked: 47,
    remarks: "That's very positive...",
    is_received: true,
    is_approved: true,
  },
  {
    _id: '4',
    start_date: '2020-01-01',
    end_date: '2020-01-07',
    // user_id: '5e2f8f9b9c8f8b1c8c8f8f8f',
    task: 'Node Test',
    description:
      'The test was very competitive and hard, but the trainees managed to overcome it.',
    satisfactory_score: 2,
    hours_worked: 47,
    remarks: 'You need to work harder...',
    is_received: true,
    is_approved: false,
  },
  {
    _id: '5',
    start_date: '2020-01-01',
    end_date: '2020-01-07',
    // user_id: '5e2f8f9b9c8f8b1c8c8f8f8f',
    task: 'Node Test',
    description:
      'The test was very competitive and hard, but the trainees managed to overcome it.',
    satisfactory_score: 2,
    hours_worked: 47,
    remarks: 'Good but you can do better...',
    is_received: true,
    is_approved: false,
  },
]

const EmployeeReports = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  useEffect(() => {
    dispatch(getUserDetails(id))
  }, [dispatch, id])

  const reportOpener = (reportId) => {
    navigate(`/employee/${id}/view-report/${reportId}`)
  }

  const newReportHandler = () => {
    navigate(`/employee/${id}/new-report`)
  }

  const approveReportHandler = (reportId) => {
    alert('approved')
  }

  const rejectReportHandler = (reportId) => {
    alert('rejected')
  }

  const editReportHandler = (reportId) => {
    navigate(`/employee/${id}/edit-report/${reportId}`)
  }

  const deleteReportHandler = (reportId) => {
    // dispatch(deleteReport())
    alert('deleted')
  }

  return (
    <>
      <div>EmployeeReports</div>
      <div>EmployeeReports</div>
      <div>EmployeeReports</div>
      <div>EmployeeReports</div>
      <div>EmployeeReports</div>
      <div>{id}</div>

      {user && (
        <>
          {/* Start of User Card */}

          <div className='clearfix'>
            <div className='row'>
              <div className='col-md-4 animated fadeIn'>
                <div className='card'>
                  <div className='card-body'>
                    <div>Personal Details</div>
                    <div className='avatar'></div>
                    <h5 className='card-title'>{user.name}</h5>
                    <h5 className='card-title'>{user.email}</h5>
                    <p className='card-text'>
                      Varanasi
                      <br />
                      <span className='phone'>{user.department}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of User Card */}
        </>
      )}

      {/* add report button for employees */}
      <Button
        variant='contained'
        style={{ padding: '10px', margin: '10px 0' }}
        onClick={newReportHandler}
      >
        + New Report
      </Button>

      {/* Employee's list of reports */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>SN</StyledTableCell>
              <StyledTableCell>Start Date</StyledTableCell>
              <StyledTableCell>End Date</StyledTableCell>
              <StyledTableCell align='left'>Task</StyledTableCell>
              <StyledTableCell align='left'>Description</StyledTableCell>
              <StyledTableCell>Satisfactory Score</StyledTableCell>
              <StyledTableCell>Hours Worked</StyledTableCell>
              <StyledTableCell>View Report</StyledTableCell>
              <StyledTableCell>Remarks</StyledTableCell>
              <StyledTableCell>Approval Status</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {reports &&
              reports.map((report, index) => (
                <StyledTableRow key={report._id}>
                  <StyledTableCell component='th' scope='row'>
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell component='th' scope='row'>
                    {report.start_date}
                  </StyledTableCell>
                  <StyledTableCell component='th' scope='row'>
                    {report.end_date}
                  </StyledTableCell>
                  <StyledTableCell component='th' scope='row'>
                    {report.task}
                  </StyledTableCell>
                  <StyledTableCell component='th' scope='row'>
                    {report.description}
                  </StyledTableCell>
                  <StyledTableCell component='th' scope='row'>
                    {report.satisfactory_score}
                  </StyledTableCell>
                  <StyledTableCell component='th' scope='row'>
                    {report.hours_worked}
                  </StyledTableCell>
                  <StyledTableCell component='th' scope='row'>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={() => {
                        reportOpener(report._id)
                      }}
                    >
                      View
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell component='th' scope='row'>
                    {report.remarks}
                  </StyledTableCell>
                  <StyledTableCell component='th' scope='row'>
                    {report.is_received ? (
                      report.is_approved ? (
                        <Button>Approved</Button>
                      ) : (
                        <Button>Rejected</Button>
                      )
                    ) : (
                      <Button>Pending</Button>
                    )}
                  </StyledTableCell>
                  <StyledTableCell component='th' scope='row'>
                    {
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                        }}
                      >
                        {/* admin's buttons */}
                        <Button
                          variant='outlined'
                          color='primary'
                          onClick={() => {
                            approveReportHandler(report._id)
                          }}
                        >
                          Approve
                        </Button>
                        <Button
                          variant='outlined'
                          color='primary'
                          onClick={() => {
                            rejectReportHandler(report._id)
                          }}
                        >
                          Reject
                        </Button>

                        {/* employers button */}
                        {!report.is_received && !report.is_approved && (
                          <>
                            <Button
                              variant='outlined'
                              color='primary'
                              onClick={() => {
                                editReportHandler(report._id)
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              variant='outlined'
                              color='primary'
                              onClick={() => {
                                deleteReportHandler(report._id)
                              }}
                            >
                              Delete
                            </Button>
                          </>
                        )}
                      </div>
                    }
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default EmployeeReports
