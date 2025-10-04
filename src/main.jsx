import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// basename MUST match vite.config.js base for GitHub Pages
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename="/VELORA-/">
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
