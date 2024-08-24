import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar/navbar'
import { PageContainer } from '../components/common/pageContainer'
import { NavbarContainer } from '../components/navbar/navbarContainer'

export function Layout(): JSX.Element {
  return (
    <div className='flex justify-center min-h-screen'>
      <div className='max-w-screen-2xl w-full md:w-11/12 sm:w-95/100'>
        <NavbarContainer>
          <Navbar />
        </NavbarContainer>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </div>
    </div>
  )
}
