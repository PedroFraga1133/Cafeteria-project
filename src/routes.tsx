import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Main/Burgers'
import AcompsPage from './pages/Main/Acomps'
import DrinksPage from './pages/Main/Drinks'
import IceCreamsPage from './pages/Main/IceCreams'
import CombosPage from './pages/Main/Combos'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
      <Route path='/' element={<BurgersPage />}  />
      <Route path='acomps' element={<AcompsPage/>}  />
      <Route path='drinks' element={<DrinksPage/>}  />
      <Route path='ice-creams' element={<IceCreamsPage/>}  />
      <Route path='combos' element={<CombosPage/>}  />
      </Route>
    </Routes>
  )
}
