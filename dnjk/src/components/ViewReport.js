import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  date,
  task,
  description,
  remarks,
  satisfactoryScore,
  hours,
  approved,
  action,
) {
  return { 
    date,
    task,
    description,
    remarks,
    satisfactoryScore,
    hours,
    approved,
    action };
}

const rows = [
  createData('7 May - 10 May' , 'React' , 'learn about react hooks', 'enjoyed', '5 Star' , '23 hours' , 'Done', 'Edit'),
  createData('7 May - 10 May' , 'React' , 'learn about react hooks', 'enjoyed', '5 Star' , '23 hours' , 'Done', 'Edit'),
  createData('7 May - 10 May' , 'React' , 'learn about react hooks', 'enjoyed', '5 Star' , '23 hours' , 'Done', 'Edit'),
  createData('7 May - 10 May' , 'React' , 'learn about react hooks', 'enjoyed', '5 Star' , '23 hours' , 'Done', 'Edit'),
  createData('7 May - 10 May' , 'React' , 'learn about react hooks', 'enjoyed', '5 Star' , '23 hours' , 'Done', 'Edit'),
  createData('7 May - 10 May' , 'React' , 'learn about react hooks', 'enjoyed', '5 Star' , '23 hours' , 'Done', 'Edit'),
  createData('7 May - 10 May' , 'React' , 'learn about react hooks', 'enjoyed', '5 Star' , '23 hours' , 'Done', 'Edit'),
  createData('7 May - 10 May' , 'React' , 'learn about react hooks', 'enjoyed', '5 Star' , '23 hours' , 'Done', 'Edit')
];

export default function ViewReport() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Task</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Remark</StyledTableCell>
            <StyledTableCell align="right">Satisfactory Score</StyledTableCell>
            <StyledTableCell align="right">Hours</StyledTableCell>
            <StyledTableCell align="right">Approved</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.date} </StyledTableCell>
              <StyledTableCell align="right">{row.task}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">{row.remarks}</StyledTableCell>
              <StyledTableCell align="right">{row.satisfactoryScore}</StyledTableCell>
              <StyledTableCell align="right">{row.hours}</StyledTableCell>
              <StyledTableCell align="right">{row.approved}</StyledTableCell>
              <StyledTableCell align="right"><Button variant="contained" color="primary">{row.action}</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
