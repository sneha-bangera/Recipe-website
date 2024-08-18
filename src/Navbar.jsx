import './Navbar.css'
import icon from './assets/search_icon.png'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <>
        <div className='navbar'>
            <Link to='/' style={{textDecoration: 'none'}}><p>Recipe<span style={{color: "white"}}>.com</span></p></Link>
            <div className='nav-search'>
                <input type="text" placeholder='Search for recipes...'/>
                <img src={icon} alt="" className='nav-search-btn'/>
            </div>
            <button className='nav-category'>Category</button>
        </div>
    </>
  )
}

export default Navbar