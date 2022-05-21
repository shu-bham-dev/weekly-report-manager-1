import { Avatar, Card, CardHeader, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import {
  getRandomColor,
  createImageFromInitials,
  getInitials,
} from './utilities'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const UserProfileCard = () => {
  let id = 'f43h48s777f89ff2'
  let name = 'John Smith'
  let email = 'john.smith@gmail.com'
  let department = 'Web Development'
  let role = 'Employee'

  let imgSrc = ''
  let color = getRandomColor()

  const navigate = useNavigate()

  return (
    <div>
      <Card
        sx={{
          width: '100%',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#ececec',
          padding: '20px',
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: `${color}` }}>{getInitials(name)}</Avatar>
          }
          style={{ padding: '0 0 10px 0' }}
          title={name}
          subheader={department}
        ></CardHeader>

        <table
          style={{
            width: '100%',
          }}
        >
          <tr>
            <td style={{ width: '100px' }}>
              <Typography>Name</Typography>
            </td>
            <td>
              <Typography>{name}</Typography>
            </td>
          </tr>
          <tr>
            <td>
              <Typography>ID</Typography>
            </td>
            <td>
              <Typography>
                {id}{' '}
                {
                  <ContentCopyIcon
                    style={{ height: '16px', cursor: 'pointer' }}
                    onClick={() => {
                      navigator.clipboard.writeText(`${id}`)
                      alert(`Copied the ID of ${name}`)
                    }}
                  />
                }
              </Typography>
            </td>
          </tr>
          <tr>
            <td>
              <Typography>Role</Typography>
            </td>
            <td>
              <Typography>{role}</Typography>
            </td>
          </tr>
          <tr>
            <td>
              <Typography>Email</Typography>
            </td>
            <td>
              <Typography>{email}</Typography>
            </td>
          </tr>
          <tr>
            <td>
              <Typography>Department</Typography>
            </td>
            <td>
              <Typography>{department}</Typography>
            </td>
          </tr>
        </table>
      </Card>
    </div>
  )
}

export default UserProfileCard
