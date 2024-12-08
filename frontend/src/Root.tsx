
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const Root = () => {
  return (
    <div className='h-auto w-full'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root