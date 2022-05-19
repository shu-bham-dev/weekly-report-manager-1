import Header from './components/Header'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
// import MTables from './components/MTable'
// import ViewReport from './components/ViewReport'
// import Report from './components/Report'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Home /> */}
      <Signup />
      {/* <Form /> */}

      {/* <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Signup />} />
        </Routes>
      </Router> */}
    </>
  )
}

export default App
