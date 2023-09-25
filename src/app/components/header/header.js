'use client'
import './header.css';
import Link from 'next/link';
import { useEffect } from 'react';
export default function Header(){   
    const popupMenu =  () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
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
},[]);
    return(
        <header>
            <div className='portfolio_container'>
            <nav className="navbar">
        <div className="logo">
            <Link href="#">Marlon</Link>
        </div>
        <div className="menu-toggle" id="menu-toggle" onClick={popupMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        <ul className="menu" id="menu">
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Skills</Link></li>
            <li><Link href="#">Work</Link></li>
            <li><Link href="#">Contact</Link></li>
        </ul>
    </nav>
    </div>
        </header>
    )
}