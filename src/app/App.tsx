import { BrowserRouter } from 'react-router-dom'

import { MainProvider } from './context/MainContext'
import { AppRoutes } from './routes/AppRoutes'
import './styles/reset.css'
import './styles/globals.scss'

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
