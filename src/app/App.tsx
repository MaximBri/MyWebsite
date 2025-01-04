import { Routes, Route, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

import MainLayout from './layouts/MainLayout'
import { MainPage } from '../pages/main'
import { AboutPage } from '../pages/about'
import { PortfolioPage } from '../pages/portfolio'
import { NotFound } from '../pages/not-found'
import './styles/Reset.css'
import './styles/Globals.scss'

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route path='' element={<MainPage />} />
              <Route path='about' element={<AboutPage />} />
              {/* <Route path='contacts' element={<ContactsPage />} /> */}
              <Route path='portfolio' element={<PortfolioPage />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </Provider>
      </HashRouter>
    </div>
  )
}

export default App
