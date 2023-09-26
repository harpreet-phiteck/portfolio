import Image from 'next/image'
import styles from './page.module.css'
import Carusal from './components/intro_carousal/carousal'
import Intro from './components/intro_section/intro'
import About from './components/about/about'
import Skills from './components/skills/skills'
export default function Home() {
  return (
   <main>
    <Intro/>
    <Carusal />
    <About/>
    <Skills/>
   </main>
  )
}
