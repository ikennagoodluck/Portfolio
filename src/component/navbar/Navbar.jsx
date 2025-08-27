import React from 'react'
import style from './Navbar.module.css'
// import images from './.public/images/logo.jpg'
export default function Navbar() {
   return (
      <div className={style.navbar}>
         <div>
            <img src="/images/logo.jpg" alt="" srcset="" className={style.logo}/>
         </div>
         <div className={style.link}>
            <a href="#" className={style.home}>Home</a>
            <a href="#" className={style.about}>About</a>
            <a href="#" className={style.skills}>Skills</a>
            <a href="#" className={style.about}>Contact</a>
         </div>
      </div>
   )
   
}

