// AppContext.js
import React, { createContext, useState } from 'react';

// Crea el contexto
const AppContext = createContext();

// Crea un componente proveedor que proporcionará el estado a los componentes hijos
function AppProvider({ children }) {
  const [nombre, setNombre] = useState("")
  const [speed, setSpeed] = useState("Rapido")
  const [estilo, setEstilo] = useState("oscuro")
  const [active, setActive] = useState(false);
  const [scrollAuto, setScrollAuto] = useState(false)
  const [countHistory, setCountHistory] = useState(0);
  const [numCharla, setNumCharla] = useState(1)
  const [fallos, setFallos] = useState(0)
  const [sobreviviente, setSobreviviente] = useState("")
  const [textFinalEnding, setTextFinalEnding] = useState("")
  let [vivientes, setVivientes] = useState("Akisha,Isami,Name,Zefio");


  return (
	<AppContext.Provider value={{ scrollAuto, setScrollAuto, textFinalEnding, setTextFinalEnding, fallos, setFallos, nombre, setNombre, speed, setSpeed, estilo, setEstilo, active, setActive, countHistory, setCountHistory, vivientes, setVivientes, numCharla, setNumCharla, sobreviviente, setSobreviviente }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };