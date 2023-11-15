import './globals.css'
import { Inter,Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Header from './components/header/header'
const poppins = Poppins({ subsets: ['latin'], weight:[ "100", "200", "300", "400", "500", "600", "700", "800", "900"]})

export const metadata = {
  title: 'Harpreet Singh - Web Developer, Front end Developer, React JS Developer, Programmer',
  description: 'I specialize in crafting immersive and user-centric web experiences. My expertise lies in HTML, CSS, and JavaScript, along with proficiency in modern front-end frameworks like Bootstrap, React, NextJs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Header/>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
