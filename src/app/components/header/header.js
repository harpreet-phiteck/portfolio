'use client'
import './header.css';
import Link from 'next/link';
import { useEffect } from 'react';
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
    document.querySelectorAll("#menu li a").forEach((ele)=>{
        ele.addEventListener("click",function(e) { 
            document.querySelectorAll("#menu li a").forEach((ele)=>{
                ele.classList.remove("bottom_bdr");
            })            
            e.target.classList.add("bottom_bdr")
        });
    })
   window.addEventListener('scroll',function(e) {     
        if(scrollY> 0){
            document.querySelector('.header').classList.add('fixed')
        }else{
            document.querySelector('.header').classList.remove('fixed')
        }
    })
},[]);
    return(
        <header className='header'>
            <div className='portfolio_container'>
            <nav className="navbar">
        <div className="logo">
            <Link href="#">Harpreet</Link>
        </div>
        <div className="menu-toggle" id="menu-toggle" onClick={popupMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        <ul className="menu" id="menu">
            <li><Link href="#intro">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#skills">Skills</Link></li>
            <li><Link href="#work">Work</Link></li>
            <li><Link href="#contact">Contact</Link></li>
        </ul>
    </nav>
    </div>
        </header>
    )
}