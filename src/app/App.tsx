import { BrowserRouter } from 'react-router-dom'

import { MainProvider } from './context/MainContext'
import { AppRoutes } from './routes/AppRoutes'
import './styles/Reset.css'
import './styles/Globals.scss'
import { CursorFollower } from '@/features/cursor-follower'

function App() {
  return (
    <div className='App'>
      <MainProvider>
        <BrowserRouter>
          <AppRoutes />
          <CursorFollower />
        </BrowserRouter>
      </MainProvider>
    </div>
  )
}

export default App
