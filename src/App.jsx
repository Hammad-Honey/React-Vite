import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './app.css';
import HOCPractice from './components/HOCPractice';
import Components from './components/ChildComponent';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import User from './components/Userprofile/user';
import {Counter, CounterProblem, ObjectsUseState} from './useStateExamples.jsx'
import { CounterProblemFixed } from './components/CounterProblemFixed.jsx';
import ArrayUseState from './components/ArrayUseState.jsx';
import SetterFromParent from './components/SetterFromParent.jsx'


function App() {
  const [mount, setMount] = useState(0)
  const abc = "naam"

  return (
    <>
      <Header />

      <div className='appbackground'>
        <SetterFromParent/>
        <ArrayUseState />
        <ObjectsUseState/>
        <CounterProblemFixed />
        <Counter/>
        <CounterProblem/>
        <Components.ExampleComponent />
        <Components.Counter />
        <HOCPractice />
        <User />
        


        {/* <ChildComponent count={mount} name={abc} />

      <button onClick={() => setMount((prev)=> prev + 1)}>
        count ++
      </button> */}
      </div>
      <Footer />
    </>

  )
}

export default App
