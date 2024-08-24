import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar/navbar'

export function Layout(): JSX.Element {
  return (
    <div className='flex justify-center min-h-screen'>
      <div className='max-w-screen-2xl w-full md:w-11/12 sm:w-95/100'>
        <div className='p-2'>
          <Navbar />
        </div>
        <div className='p-2'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
