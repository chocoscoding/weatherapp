import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai'
function hideme(){
    document.querySelector('.footer').remove()
}
const Footer = () => {
    return (
        <div className='footer'>
            <p ><a href="https://github.com/chocoscoding">@chocoscoding</a> </p>  

            <button className='remove' onClick={hideme}><AiOutlineCloseCircle/></button>
        </div>
    )
}

export default Footer
