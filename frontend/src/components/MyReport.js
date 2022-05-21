import React from 'react'
import UserProfileCard from './UserProfileCard'
import { Typography } from '@material-ui/core'
import { Divider } from '@mui/material'

const MyReport = () => {
  return (
    <div style={{ marginTop: '120px' }}>
      <UserProfileCard />
      <Typography variant='h4'>My Reports</Typography>
      <Divider />

      <div className='container'></div>
    </div>
  )
}

export default MyReport
