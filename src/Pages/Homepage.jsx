import './Homepage.css'
import Popular from '../Components/Popular'
import High_rated from '../Components/High_rated'
import Low_cal from '../Components/Low_cal'

function Homepage() {

  return (
    <>
      <div className='home-pg'>

        {/* <div className='home-category'>
            <h3>SEARCH BY CATEGORY</h3>
            <div className='category-options'>
                <span>BREAKFAST<br />RECIPES</span>
                <span>LUNCH<br />RECIPES</span>
                <span>DINNER<br />RECIPES</span>
                <span>MOST<br />POPULAR</span>
                <span>CUISINE</span>
                <span>DIFFICULTY<br />LEVEL</span>
            </div>
        </div> */}
        <Popular/>
        <High_rated/>
        <Low_cal/>
        {/* <div className='popular-search'>
            <h2>POPULAR SEARCHES</h2>
            <div className='popular-options'></div>
        </div> */}
      </div>
    </>
  )
}

export default Homepage