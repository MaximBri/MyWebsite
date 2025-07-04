import { Routes, Route, HashRouter } from 'react-router-dom'

import { MainLayout } from './layouts/MainLayout'
import { MainPage } from '../pages/main'
import { PortfolioPage } from '../pages/portfolio'
import { ReviewsPage } from '../pages/reviews'
import { NotFound } from '../pages/not-found'
import { routes } from '../shared/config/routes'
import './styles/reset.css'
import './styles/globals.scss'

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path={routes.home} element={<MainLayout />}>
            <Route index element={<MainPage />} />
            {/* <Route path={routes.about} element={<AboutPage />} /> */}
            <Route path={routes.portfolio} element={<PortfolioPage />} />
            <Route path={routes.reviews} element={<ReviewsPage />}></Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
