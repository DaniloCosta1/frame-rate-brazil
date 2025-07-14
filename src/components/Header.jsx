import React from 'react'
import Logo from '../assets/image/logo.jpg'

const Header = () => {
  return (

    <div className="header__main">
        <div className='header'>
            <img src={Logo} alt="" width={70} height={70}/>
            <h1>Frame Rate Brazil</h1>
            <div className="search">search</div>
        </div>
    </div>
    
  )
}

export default Header
