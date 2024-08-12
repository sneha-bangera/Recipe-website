import './App.css'
import Data from './Components/Data'
import Navbar from './Navbar'
import Homepage from './Pages/Homepage'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        {/* <Route path='/:id' element={<Homepage/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
