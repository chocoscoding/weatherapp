import React from 'react'
import {BiCurrentLocation} from 'react-icons/bi'

const Location = ({name, country}) => {
    return (
        <div className='location'>
            
         <BiCurrentLocation/>   {`${name} , ${country}`}
        </div>
    )
}

export default Location
