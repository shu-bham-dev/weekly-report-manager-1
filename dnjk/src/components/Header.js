import React, { useState } from 'react'
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

const Header = () => {
  const [value, setValue] = useState()
  const theme = useTheme()
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  // console.log(isMatch);

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
              <Button sx={{ marginLeft: 'auto' }} variant='contained'>
                Login
              </Button>
              <Button sx={{ marginLeft: '10px' }} variant='contained'>
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
