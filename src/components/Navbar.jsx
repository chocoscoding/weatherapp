import React, {useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi'
import {RiFahrenheitFill, RiCelsiusFill} from 'react-icons/ri'

const Navbar = ({degree, changedegree, snsl}) => {
    const [ inputText, setInputText] = useState('London')
    const findData=(e)=>{
        e.preventDefault();
        snsl(inputText)
    }
    
    return (
        <div className='nav-container'>
            <form className="search-form" onSubmit={findData}>
                <input type="text" placeholder='Search your location' value={inputText} onChange={(e)=> setInputText(e.target.value)} className='searchInput' />
                <button type='submit' className='search-submit'> <BiSearchAlt/> </button>
            </form>

            <div className="degree-container">
                <div className={degree? 'fahrenheit degactive' : 'fahrenheit'} onClick={changedegree}><RiFahrenheitFill/></div>
                <div className={degree? 'celcius' : 'celcius degactive'} onClick={changedegree}><RiCelsiusFill/></div>
            </div>
            
        </div>
    )
}

export default Navbar