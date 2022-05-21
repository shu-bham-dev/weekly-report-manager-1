import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import EmployeeList from './EmployeeList'
import PersonalReports from './PersonalReports'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    }
  }, [dispatch, userInfo, navigate])

  return (
    <div style={{ marginTop: '100px' }}>
      {/* {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : userInfo ? (
        <>
          <p>userPage</p>
          <p>userPage</p>
          <p>userPage</p>
          <p>userPage</p>
          <p>userPage</p>
        </>
      ) : (
        <>
          <p>Non userPage</p>
          <p>Non userPage</p>
          <p>Non userPage</p>
          <p>Non userPage</p>
          <p>Non userPage</p>
          {navigate('/login')}
          {alert('Non userPage')}
        </>
      )} */}

      {/* {user.role === '$$MY_&&nAme_..AdmiNN,_saN@&**' ? (
        <EmployeeList />
      ) : (
        <PersonalReports />
      )} */}
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
    </div>
  )
}

export default Home
