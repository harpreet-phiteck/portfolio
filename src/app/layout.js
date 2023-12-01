import './globals.css'
import Header from './components/header/header'
export const metadata = {
  title: "Hi I'm Harpreet Web developer Frontend developer Reactjs Developer",
  description: 'I specialize in HTML, CSS, and JavaScript, along with proficiency in modern front-end frameworks like Bootstrap, React, NextJs.',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    keywords: ['webdeveloper', 'webdesigner', 'developer', 'programmer'],
  },
}
const jsonLd ={
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "Harpreet Singh",
  "url": "https://harpreetdev.in",
  "sameAs": [
    "https://in.linkedin.com/in/harpreet-bambrah",
    "https://github.com/Harpreet-Bambrah"
  ],
  "jobTitle": "Frontend web Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "HARPREETDEV",
    "url": "https://harpreetdev.in"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "PTU",
    "url": "https://ptu.ac.in/"
  },
  "image": "https://harpreetdev.vercel.app/_next/image?url=%2Fharpreet_profile_img%20(1).png&w=384&q=75",
  "email": "harpreetbambrah93@gmail.com ",
  "telephone": "+919463308973",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#1216",
    "addressLocality": "Phase 5, Sector 59",
    "addressRegion": "Punjab",
    "postalCode": "160059",
    "addressCountry": "India"
  },
  "description": "Hi i,m web developer, create website with html css and javascript",
  
  "hasOccupation": [
    {
      "@type": "Occupation",
      "name": "Web Developer",
      "description": "Hi i,m web developer, create website with html css and javascript"
    }
  ],
  "url": "https://harpreetdev.in",
  "knowsLanguage": "English, Hindi, Punjabi",
  "knowsAbout": [
    "Html, Javascript, Css, Bootstrap, Jquery, Figma"
  ]
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
        <Header/>
        {children}  
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        </body>
    </html>
  )
}
