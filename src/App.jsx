import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.css'
import HOCPractice from './components/HOCPractice'
import Components from './components/ChildComponent';




function App() {
  const [mount, setMount] = useState(0)
  const abc = "naam"

  return (
    <div className='appbackground'>
      <Components.ExampleComponent/>
      <Components.Counter/>
      <HOCPractice />
      {/* <ChildComponent count={mount} name={abc} />

      <button onClick={() => setMount((prev)=> prev + 1)}>
        count ++
      </button> */}
    </div>
  )
}

export default App
