import React, {useState, useContext, useEffect} from 'react';
import ReactDOM from 'react-dom'
import { AppContext } from '../AppContext';
import Story from '../story/story'
import Historia from '../story/textStory'

import Akisha from '../response/Akisha'
import Isami from '../response/Isami'
import Zefio from '../response/Zefio'

const lista = ({condicional}) =>{

	const eliminar = condicional;

	const {nombre, speed, setSpeed, speedElement, setSpeedElement, countHistory, setCountHistory, vivientes, setVivientes, setSobreviviente} = useContext(AppContext);
	
	const [state, setState] = useState(false)

	const [state2, setState2] = useState(false)

	const [elements, setElements] = useState([]);
	const [mensajeEnd, setMensajeEnd] = useState(false)
	const [nameEliminated, setNameEliminated] = useState("")

	const [continuar, setContinuar] = useState(false)
	const [id, setId] = useState(0)


	useEffect(() => {

		if(vivientes.includes("Name")){
			const nombrando = vivientes.replace(new RegExp("Name", 'g'), nombre);
			const elementList = nombrando.split(",");
			setElements(elementList.sort());
		} else {
		setElements(vivientes.sort());
		}

		if(eliminar == "false") {
			setId(countHistory);
			setCountHistory(countHistory + 1);
			setTimeout(()=>{
				setContinuar(true)
			}, 1500)
		}

	}, [])


	function continueF () {

		return ReactDOM.createPortal(
			<Story text={Historia[id + 1]} />,
			document.getElementById('root')
		);

	}

	function despedida () {

		if(nameEliminated == "Akisha") return ReactDOM.createPortal(<Story text={{"texto": Akisha[0].despedirse, "effect": "eliminado", "autor": "Akisha"}} />,document.getElementById('root'))
		if(nameEliminated == "Isami") return ReactDOM.createPortal(<Story text={{"texto": Isami[0].despedirse, "effect": "eliminado", "autor": "Isami"}} />,document.getElementById('root'))
		if(nameEliminated == "Zefio") return ReactDOM.createPortal(<Story text={{"texto": Zefio[0].despedirse, "effect": "eliminado", "autor": "Zefio"}} />,document.getElementById('root'))


	}



	function eliminado (argument, e) {

		if(eliminar == "false") return;
		if(argument == nombre && !state) return;
		else {
			if(state) return;

			if(typeof vivientes == "string") {
				const a = vivientes.split(",");
				const b = a.filter(res => res != nombre);
				setSobreviviente(b[0]);
			}

			setVivientes(elements.filter(res => res != argument));
			
			if(elements.length == 3) {
				let b = elements.filter(res => res != nombre);
				b = b.filter(res => res != argument);
				setSobreviviente(b[0]);
			}

			e.textContent = "Elimineted";
			setTimeout(()=>{
				setElements(elements.filter(res => res != argument));
				setTimeout(()=>{
					setNameEliminated(argument)
					setMensajeEnd(true);
				}, 1500)
			}, 1500)
			setState(true);
		}
	}	

	return (
		<div>
			<ul id="list">
				{elements.map((valor, index)=>
					(
						<li className={eliminar == "true" ? valor == nombre ? "liYo" : "liEliminated" : ""} onClick={(e)=> eliminado(valor, e.target)} key={index}>{valor}</li>
					)
				)}
			</ul>
			{mensajeEnd ? despedida() : true}
			{continuar ? continueF() : true}
		</div>
	)

}


export default lista;