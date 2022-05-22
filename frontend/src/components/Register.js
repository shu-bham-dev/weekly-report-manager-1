import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { register } from '../actions/userActions'

<<<<<<< HEAD
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Divider } from '@mui/material'

const theme = createTheme()
=======
import './register.css'
>>>>>>> 4906550cf0a032aededd2db951523b153175a147

const Signup = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      setMessage('Registered successfully! Redirecting to the home page...')
      navigate('/')
    }
  }, [userInfo, navigate])

  const signupHandler = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
      alert('Passwords do not match')
    } else {
      // dispatch the register action
      dispatch(register(name, email, password))
    }
  }

  return (
<<<<<<< HEAD
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#063970' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box component='form' noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete='given-name'
                  name='fullName'
                  required
                  fullWidth
                  id='fullName'
                  label='Full Name'
                  autoFocus
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='Confirm password'
                  label='Confirm password'
                  type='password'
                  id='confirmPassword'
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 1 }}
              onClick={signupHandler}
            >
              Sign Up
            </Button>
=======
    <div className='container'>
      <p>.</p>
      <p>.</p>
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
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
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
>>>>>>> 4906550cf0a032aededd2db951523b153175a147

            <Divider sx={{ mt: 1, mb: 1 }} />
            <Typography variant='body1' color='textSecondary' align='left'>
              Already have an account?{' '}
            </Typography>
            <Button
              fullWidth
              variant='outlined'
              sx={{ mb: 2 }}
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Signup
