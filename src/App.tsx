import { Routes, Route, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './rtk/store'

import MainLayout from './layouts/MainLayout'
import { MainPage, AboutPage, ContactsPage, PortfolioPage, NotFound } from './pages'
import './scss/reset.css'
import './scss/Globals.scss'
import './fonts/fonts.css'

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
