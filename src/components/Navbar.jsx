import React from 'react';
import { BiSearchAlt } from 'react-icons/bi'
import {RiFahrenheitFill, RiCelsiusFill} from 'react-icons/ri'

const Navbar = ({degree, changedegree}) => {
    
    return (
        <div className='nav-container'>
            <form className="search-form">
                <input type="text" placeholder='Search your location' className='searchInput' />
                <button type='button' className='search-submit'> <BiSearchAlt/> </button>
            </form>

            <div className="degree-container">
                <div className={degree? 'fahrenheit degactive' : 'fahrenheit'} onClick={changedegree}><RiFahrenheitFill/></div>
                <div className={degree? 'celcius' : 'celcius degactive'} onClick={changedegree}><RiCelsiusFill/></div>
            </div>
            
        </div>
    )
}

export default Navbar