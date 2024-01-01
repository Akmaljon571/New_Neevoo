import { useEffect, useState } from 'react'
import { sum } from '../../../utils/func/sum';
import { GET } from '../../../utils/api/get'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useStart from '../../../hooks/useStart'
import error from '../../../img/search-not-found-5342748-4468820.webp'
import './findcourses.scss'

function FindCourses() {
  const children = ''
  const { token } = useStart()
  const [history, setHistory] = useState([])

  useEffect(() => {
    GET('/take/user/', token)
      .then(res => res.json())
      .then(data => setHistory(data))
  }, [children, setHistory, token])

  return (
    <>
      <h1 className='hsitory_h1' style={{ margin: '30px 0 50px 0' }}>Kurslar tarixi</h1>
      <span>Sizning Kurslaringiz Tarixi</span>
      <div style={{ minHeight: '200px', marginBottom: '100px', marginTop: '10px' }} className='courses_main'>
        {history?.length ? (
          <TableContainer style={{ backgroundColor: "#e6f0f9" }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Kurs Tarifi</TableCell>
                  <TableCell align="right">Olingan Sana</TableCell>
                  <TableCell align="right">Active</TableCell>
                  <TableCell align="right">Tugash Sanasi</TableCell>
                  <TableCell align="right">To'lov Narxi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {history.map((row) => (
                  <TableRow
                    key={row.title}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell align="right">{row.create_date}</TableCell>
                    <TableCell align="right"><span className={row.active ? "faol" : "no_faol"}>{row.active ? "Faol" : "No Faol"}</span></TableCell>
                    <TableCell align="right">{row.finish_date}</TableCell>
                    <TableCell align="right">{sum(row.price)} so'm</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <img className='error_image' style={{ margin: '50px auto' }} src={error} alt='zor rasm' />
        )}
      </div>
    </>
  )
}

export default FindCourses
