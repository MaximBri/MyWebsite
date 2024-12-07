import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'

import NotFound from './pages/NotFound'
import Header from './components/Header'
import './scss/reset.css'
import './scss/Globals.scss'
import './fonts/fonts.css'

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
