import './App.css'
import Data from './Components/Data'
import Navbar from './Navbar'
import Homepage from './Pages/Homepage'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import RecipePage from './Pages/RecipePage'
import Login from './Pages/Login'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/recipe' element={<RecipePage/>}>
          <Route path=':id' element={<RecipePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
