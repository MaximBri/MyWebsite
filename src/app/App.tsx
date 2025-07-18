import { BrowserRouter } from 'react-router-dom'

import { MainProvider } from './context/MainContext'
import { AppRoutes } from './routes/AppRoutes'
import './styles/Reset.css'
import './styles/Globals.scss'

function App() {
  return (
    <div className='App'>
      <MainProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </MainProvider>
    </div>
  )
}

export default App
