import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

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

function createData(name, lastUpdate, action) {
  return { name, lastUpdate, action }
}

const rows = [
  createData('Shubham Sahu', '24 May 2022', 'View'),
  createData('Shubham Sahu', '24 May 2022', 'View'),
  createData('Shubham', '24 May 2022', 'View'),
  createData('Shubham', '24 May 2022', 'View'),
  createData('Shubham', '24 May 2022', 'View'),
  createData('Shubham', '24 May 2022', 'View'),
  createData('Shubham', '24 May 2022', 'View'),
]

export default function MTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Employee Name</StyledTableCell>
            <StyledTableCell align='right'>Last Update</StyledTableCell>
            <StyledTableCell align='right'></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.lastUpdate}</StyledTableCell>
              <StyledTableCell align='right'>
                <Button variant='contained' color='primary'>
                  {row.action}
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
