import { Route, Routes } from 'react-router-dom'

import { routes } from '@/shared/config/routes'
import { MainLayout } from '../layouts/MainLayout'
import { MainPage } from '@/pages/main'
import { PortfolioPage } from '@/pages/portfolio'
import { NotFound } from '@/pages/not-found'
import { WorkPage } from '@/pages/work'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path={routes.portfolio}>
          <Route index element={<PortfolioPage />} />
          <Route path=':id' element={<WorkPage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
