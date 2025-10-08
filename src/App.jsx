import { Outlet } from 'react-router-dom'
import './App.css'
import './i18n'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import BackToTop from './components/common/BackToTop'
import Bereit from './components/Bereit'

function App() {

  return (
    <>

      <Header />
      <main className='mt-[100px]'>
        <Outlet />
      </main>
      <Bereit />
      {/* <Footer /> */}
      {/* <BackToTop /> */}

    </>
  )
}

export default App
