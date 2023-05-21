import React, {useState, useEffect, useRef} from 'react'
import Introduccion from './introduccion'

const lobby = () => {

	const lobbyElement = useRef();

	const [continuar, setContinuar] = useState(false)

	function comenzando () {

		lobbyElement.current.style.opacity = "0";

		setTimeout(()=>{
			lobbyElement.current.style.display = "none";
			setContinuar(true);
			// document.getElementById("audio").play();
		}, 1000)
	}


	return (
		<>
		<div ref={lobbyElement} id="lobby">
			<h1>La IA y la Humana</h1>
			<button onClick={comenzando}>Comenzar</button>
		</div>
		{continuar ? <Introduccion /> : true}
		</>
	)
}

export default lobby