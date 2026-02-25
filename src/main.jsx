import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import User from './components/Userprofile/user'
// const array=[];
// for(let i=0;i<3; i++)
// {
//   array.push(<App />);
// }
// console.log(array);

// function ifUser(user){
//    if(user){
//     return <Header/>
//    }
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    {/* {array} */}
    <App />
    <User />
    <Footer />
  </StrictMode>,
)
