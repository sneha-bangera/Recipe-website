import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchBar } from './Components/SearchBar'
import { SearchResultsList } from './Components/SearchResultList'
import { CgProfile } from "react-icons/cg";

function Navbar() {

  const [results, setResults] = useState([]);

  return (
    <>
        <div className='navbar'>
            <Link to='/' style={{textDecoration: 'none'}}><p>Recipe<span style={{color: "white"}}>.com</span></p></Link>
            <div className='nav-search'>
              <SearchBar setResults={setResults} />
              {/* {results && results.length > 0 && <SearchResultsList results={results} />} */}
            </div>
            <Link to="/login" style={{textDecoration:'none'}}>
            <button className='nav-login'>
                <CgProfile style={{fontSize:25}}/>
                <span>Login</span>
            </button>
            </Link>
        </div>
        {results && results.length > 0 && <SearchResultsList results={results} />}
    </>
  )
}

export default Navbar