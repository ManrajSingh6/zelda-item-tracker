import { Navigate, Route, Routes } from 'react-router-dom'
import {
  CREATURES_ROUTE,
  EQUIPMENT_ROUTE,
  MATERIALS_ROUTE,
  MONSTERS_ROUTE,
  TREASURE_ROUTE
} from './utils/routes'
import { MonstersPage } from './pages/MonstersPage'
import { Layout } from './pages/layout'
import { EquipmentPage } from './pages/EquipmentPage'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={MONSTERS_ROUTE} />} />
      <Route path='/' element={<Layout />}>
        <Route path={MONSTERS_ROUTE} element={<MonstersPage />} />
        <Route path={EQUIPMENT_ROUTE} element={<EquipmentPage />} />
        <Route path={MATERIALS_ROUTE} element={<p>Materials Page</p>} />
        <Route path={CREATURES_ROUTE} element={<p>Creatures Page</p>} />
        <Route path={TREASURE_ROUTE} element={<p>Treasure Page</p>} />
      </Route>
    </Routes>
  )
}

export default App
