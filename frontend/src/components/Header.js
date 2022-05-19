import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

import atclogo from './atc.png'
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import DrawerComp from './Drawer'
import { Link } from 'react-router-dom'

const Header = () => {
  const [value, setValue] = useState()
  const theme = useTheme()
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  // console.log(isMatch);

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <>
      <AppBar sx={{ background: '#063970' }}>
        <Toolbar>
          <img src={atclogo} height='80px' alt='logo in header' />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: '2rem', paddingLeft: '10%' }}>
                Weekly Report Manager
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: 'auto' }}
                indicatorColor='secondary'
                textColor='inherit'
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label='Home' />
                <Tab label='Report' />
                <Tab label='About' />
              </Tabs>
              {userInfo ? (
                <>
                  <Typography sx={{ fontSize: '2rem', paddingLeft: '10%' }}>
                    {userInfo.name}
                  </Typography>
                  <Button
                    sx={{ marginLeft: 'auto' }}
                    variant='contained'
                    onClick={logoutHandler}
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to='/login'>
                    <Button sx={{ marginLeft: 'auto' }} variant='contained'>
                      Login
                    </Button>
                  </Link>

                  <Link to='/register'>
                    <Button sx={{ marginLeft: '10px' }} variant='contained'>
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
