import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root')
if (!rootElement) alert('Ошибка на сайте')
const root = ReactDOM.createRoot(rootElement as HTMLDivElement)
root.render(<App />)
