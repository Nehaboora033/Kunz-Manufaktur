import { Outlet } from 'react-router-dom'
import './App.css'
import './i18n'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import BackToTop from './components/common/BackToTop'

function App() {

  return (
    <>

      <Header />
      <main className='mt-[100px]'>
        <Outlet />
      </main>
      <Footer />
      {/* <BackToTop /> */}

    </>
  )
}

export default App
