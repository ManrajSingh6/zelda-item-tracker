import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar/navbar'
import { PageContainer } from '../components/common/pageContainer'
import { NavbarContainer } from '../components/navbar/navbarContainer'

export function Layout(): JSX.Element {
  return (
    <div className='flex min-h-screen justify-center'>
      <div className='sm:w-95/100 w-full max-w-screen-2xl md:w-11/12'>
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
