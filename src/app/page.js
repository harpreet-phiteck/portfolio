import Image from 'next/image'
import styles from './page.module.css'
import Carusal from './components/intro_carousal/carousal'
import Intro from './components/intro_section/intro'
import About from './components/about/about'
export default function Home() {
  return (
   <main>
    <Intro/>
    <Carusal />
    <About/>
   </main>
  )
}
