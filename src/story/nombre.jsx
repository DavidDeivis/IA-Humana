import React, {useState, useEffect, useContext} from 'react'
import { AppContext } from '../AppContext';
import Story from './story'
import Historia from './textStory'

const nombre = () => {

	const {setNombre, speed, setspeed, speedElement, setSpeedElement, countHistory, setCountHistory, vivientes, setVivientes} = useContext(AppContext);

	const [identificador, setIdentificador] = useState(0)
	const [inicial, setInicial] = useState(false)

	const [texto, setTexto] = useState("");

	function nombreIntroducido(e){
		e.preventDefault();

		if(inicial) return;
		let name = e.target.children[0].value.trim();

		if(name == "") return;

		let nombrado = name[0].toUpperCase();

		for (let i = 1; i < name.length; i++) {
			nombrado += name[i];
		}
		
		setNombre(nombrado);
		setCountHistory(countHistory + 1);
		setInicial(true);
	};

	useEffect(() => {
		setIdentificador(countHistory);
	}, [])


	return (
		<div>
			<form id="form-initial" onSubmit={nombreIntroducido}>
		        <input spellCheck="false" type="text" placeholder="Introduce tu nombre" />
		        <input type="submit" value="Jugar" />
		    </form>
		    {inicial ? <Story text={Historia[2]} /> : true}
	    </div>
	)
}

export default nombre