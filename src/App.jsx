import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChildComponent from './components/ChildComponent'
import './app.css'


function App() {
  const [mount, setMount] = useState(0)
  const abc = "naam"

  return (
    <div className='appbackground'>
      
      <ChildComponent count={mount} name={abc} />

      <button onClick={() => setMount((prev)=> prev + 1)}>
        count ++
      </button>
    </div>
  )
}

export default App
