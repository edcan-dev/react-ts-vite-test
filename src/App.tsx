import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('Este es un ejemplo') ;
  const [color, setColor] = useState('white') ;

  function modifyText() : void {

    const newText : string = text == 'Este es un ejemplo' ? 'Este es otro ejemplo' : 'Este es un ejemplo';

    const newColor : string = color == 'white' ? '#2af' : 'white'

    setText(newText);
    setColor(newColor)

   /* el.style.color = el.style.color == 'white' ? el.style.color = '#23a' : el.style.color = 'white'*/
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='h1'>Aplicación de Ejemplo, jeje</h1>
      <h2 style={
        {
          color: color
        }
      } >{text}</h2>

      <div className="card">
      <button onClick={modifyText}>
          Modificar texto
        </button>
        <br />
        <br />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
