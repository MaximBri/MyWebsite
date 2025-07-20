import ReactDOM from 'react-dom/client'
import App from './App'
import { register } from './serviceWorkerRegistration'

const rootElement = document.getElementById('root')
if (!rootElement) alert('Ошибка на сайте')
const root = ReactDOM.createRoot(rootElement as HTMLDivElement)
root.render(<App />)

register({
  onSuccess: (reg) => {
    console.log('SW Registered successfully:', reg)
  },
  onUpdate: (reg) => {
    console.log('SW Update found:', reg)
  },
})
