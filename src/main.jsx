import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/adityaraj3768/landingpage.git
git push -u origin main