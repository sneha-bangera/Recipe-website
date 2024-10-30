import './Navbar.css'
import icon from './assets/search_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchBar } from './Components/SearchBar'
import { SearchResultsList } from './Components/SearchResultList'

function Navbar() {

  const [results, setResults] = useState([]);

  return (
    <>
        <div className='navbar'>
            <Link to='/' style={{textDecoration: 'none'}}><p>Recipe<span style={{color: "white"}}>.com</span></p></Link>
            <div className='nav-search'>
              <SearchBar setResults={setResults} />
              {results && results.length > 0 && <SearchResultsList results={results} />}
            </div>
            <a className='nav-category'>
              <span>Category</span>
            </a>
        </div>
    </>
  )
}

export default Navbar