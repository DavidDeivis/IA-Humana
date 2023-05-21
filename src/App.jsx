import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Desition from './components/desition.jsx'
import Introduccion from "./components/introduccion.jsx"
import Opciones from './components/opciones.jsx'
import Story from './story/story'
import Historia from './story/textStory'
import Nombre from './story/nombre'
import Lista from './components/lista'
import Charla from './components/charla'
import Virtud from './components/virtud'
import Run from './components/gameRun'
import Lobby from './components/lobby'

      // <Introduccion />
      // <Story text={Historia[0]} />

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Opciones />
      <Lobby />
    </>
  )
}

export default App
