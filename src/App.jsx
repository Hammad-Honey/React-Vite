import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './app.css';
import HOCPractice from './components/HOCPractice';
import Components from './components/ChildComponent';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import User from './components/Userprofile/user';
import { Counter, CounterProblem, ObjectsUseState } from './useStateExamples.jsx'
import { CounterProblemFixed } from './components/CounterProblemFixed.jsx';
import ArrayUseState from './components/ArrayUseState.jsx';
import SetterFromParent from './components/SetterFromParent.jsx'
//Importing User Context
import { AuthProvider } from './context/UserAuth.jsx';
import Dashboard from './components/Userprofile/Dashboard.jsx';

function App() {

  return (
    <>
      <Header />
      <div className='appbackground'>
        <AuthProvider>
            <Dashboard/>
        </AuthProvider>




        <SetterFromParent />
        <ArrayUseState />
        <ObjectsUseState />
        <CounterProblemFixed />
        <Counter />
        <CounterProblem />
        <Components.ExampleComponent />
        <Components.Counter />
        <HOCPractice />
        <User />
      </div>
      <Footer />
    </>

  )
}

export default App
