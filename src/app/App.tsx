import { HashRouter } from 'react-router-dom'

import { MainProvider } from './context/MainContext'
import { AppRoutes } from './routes/AppRoutes'
import './styles/reset.css'
import './styles/globals.scss'

function App() {
  return (
    <div className='App'>
      <MainProvider>
        <HashRouter>
          <AppRoutes />
        </HashRouter>
      </MainProvider>
    </div>
  )
}

export default App
