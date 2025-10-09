import { Outlet } from 'react-router-dom'
import './App.css'
import './i18n'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import BackToTop from './components/common/BackToTop'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, 
      offset: 100,    
      once: true,     
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <>

      <Header />
      <main className='mt-[100px]'>
        <Outlet />
      </main>

      <Footer />
      <BackToTop />

    </>
  )
}

export default App
