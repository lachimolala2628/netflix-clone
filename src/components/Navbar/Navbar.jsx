import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import Search from '../../assets/search_icon.svg'
import Bell from '../../assets/bell_icon.svg'
import Profile from '../../assets/profile_img.png'
import Dropdown from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {

    const navRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY >= 80){
                navRef.current.classList.add('nav-dark')
            }
            else{
                navRef.current.classList.remove('nav-dark')
            }
        })
    },[])

    return (
        <>
            <div ref={navRef} className='navbar'>
                <div className='navbar-left'>
                    <img src={Logo} alt="Netflix-Logo" />
                    <ul>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                        <li>Browse by Languages</li>
                    </ul>
                </div>
                <div className='navbar-right'>
                    <img src={Search} alt="Search-Image" className='icons' />
                    <p>Children</p>
                    <img src={Bell} alt="Bell-Image" className='icons' />
                    <div className='navbar-profile'>
                        <img src={Profile} alt="Profile-Image" className='profile' />
                        <img src={Dropdown} alt="DropDown-image" className='icons' />
                        <div className="dropdown">
                            <p onClick={() => {logout()}}>Sign Out of Netflix</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar