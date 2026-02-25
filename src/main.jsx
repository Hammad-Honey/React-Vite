import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/header/header'
import Footer from './components/footer/footer.jsx'

function ifUser(user){
   if(user){
    return <Header/>
   }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {ifUser(true)}
    <App />
    <Footer />
  </StrictMode>,
)
