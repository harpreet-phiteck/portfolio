'use client'
import './header.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
export default function Header(){   
    const popupMenu =  () => {
    const menu = document.getElementById("menu");
    const bar = document.querySelectorAll(".bar")
    menu.classList.toggle("active");
    bar[0].classList.toggle("rotate_bar1");
    bar[1].classList.toggle("rotate_bar3");
    bar[2].classList.toggle("rotate_bar2");
};
useEffect(()=>{  
   window.addEventListener('scroll',function(e) {     
        if(scrollY> 0){
            document.querySelector('.header').classList.add('fixed')
        }else{
            document.querySelector('.header').classList.remove('fixed')
        }
    })
},[]);
    return(
        <header className='header' id='header'>
            <div className='portfolio_container'>
            <nav className="navbar">
        <div className="logo">
            <Link href="/"> <span style={{color:'#3e6ff4'}}>HAR</span>PREETDEV</Link>
        </div>
        <div className="menu-toggle" id="menu-toggle" onClick={popupMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        <ul className="menu" id="menu">      
            <li><ScrollLink to="intro" data-to-scrollspy-id="intro"> Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={200} data-to-scrollspy-id="about">About </ScrollLink></li>
            <li><ScrollLink to="skills"  smooth={true} duration={200} data-to-scrollspy-id="skills">Skills </ScrollLink></li>
            <li><ScrollLink to="work" smooth={true} duration={200} data-to-scrollspy-id="work">Work </ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={200} data-to-scrollspy-id="contact">Contact </ScrollLink></li>
        </ul>
    </nav>
    </div>
        </header>
    )
}