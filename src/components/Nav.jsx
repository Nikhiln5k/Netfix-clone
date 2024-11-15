import React, { useEffect, useState } from 'react'
import logo from '../image/logo.png'
import './Nav.css'

function Nav() {
  const[show,setShow]=useState(false)


  useEffect(()=>{// event is scrolling by Y direction 
    window.addEventListener('scroll',()=>{
      if(window.scrollY>600){  // if greater than bsner height
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })
  return (
    <div className ={`${show && 'nav-black'} nav`}>
      <img src={logo} alt="" style={{backgroundColor:"transparent"}} />
    </div>
  )
}

export default Nav