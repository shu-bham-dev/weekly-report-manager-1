import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import AssessmentIcon from '@mui/icons-material/Assessment'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Rating from '@mui/material/Rating'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import Stack from '@mui/material/Stack'

const theme = createTheme()

export default function AddReport() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }
  // For Rating
  const [value, setValue] = React.useState(0)
  const [valueDate, setValueDate] = React.useState(new Date())
  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AssessmentIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Add Report
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {/* Date */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DatePicker
                      views={['day']}
                      label='Start Date'
                      value={valueDate}
                      onChange={(newValueDate) => {
                        setValue(newValueDate)
                      }}
                      renderInput={(params) => (
                        <TextField {...params} helperText={null} />
                      )}
                    />
                    <DatePicker
                      views={['day']}
                      label='End Date'
                      value={valueDate}
                      onChange={(newValueDate) => {
                        setValue(newValueDate)
                      }}
                      renderInput={(params) => (
                        <TextField {...params} helperText={null} />
                      )}
                    />
                  </Stack>
                </LocalizationProvider>
                {/* Date */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='task'
                  required
                  fullWidth
                  id='task'
                  label='Task Name'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='description'
                  label='Description'
                  name='description'
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    '& > legend': { mt: 2 },
                  }}
                />
                <Typography component='legend'>Satisfactory Score</Typography>
                <Rating
                  name='simple-controlled'
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='hours'
                  label='Hours Worked'
                  name='hours'
                  type='number'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='remarks'
                  label='Remarks'
                  type='text'
                  id='remark'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Report
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
