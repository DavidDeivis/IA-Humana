import React, {useState, useEffect, useContext} from 'react'
import ReactDOM from 'react-dom'
import { AppContext } from '../AppContext'
import Story from '../story/story'
import Historia from '../story/textStory'


const virtud = () => {

	const {nombre, countHistory, setCountHistory, sobreviviente, fallos, setFallos} = useContext(AppContext);
	const [id, setId] = useState(0);
	const [continuar, setContinuar] = useState(false);
	const [vivo, setVivo] = useState("");

	useEffect(() => {

		setId(countHistory);
		setCountHistory(countHistory + 1);
		
	}, [])

	function errorVirtud (e) {

			e.target.classList.add("form-virtud-mov");

			setTimeout(()=>{
				e.target.classList.remove("form-virtud-mov");
			}, 300)

			setFallos(fallos + 1);

			e.target.children[0].value = "";
			e.target.children[0].setAttribute("placeholder", "Incorrecto");

	}

	function correr (e) {

		e.preventDefault();

		if(continuar) return;

		let valor = e.target.children[0].value.toLowerCase();

		if(sobreviviente == "Akisha" && valor == "libertad" || 
		   sobreviviente == "Akisha" && valor == "libertades") {
		   setContinuar(true);
		   return;
		}

		if(sobreviviente == "Isami" && valor == "manipulador" || 
		   sobreviviente == "Isami" && valor == "manipuladora" || 
		   sobreviviente == "Isami" && valor == "manipuladores") {
		   setContinuar(true);
		   return;
		}

		if(sobreviviente == "Zefio" && valor == "ideal" || 
		   sobreviviente == "Zefio" && valor == "ideales") {
		   setContinuar(true);
		   return;
		}

		errorVirtud(e);

	}

	function virtudCorrecta () {

		if(fallos == 0) {
			return ReactDOM.createPortal(
				<Story text={{"autor": sobreviviente, "effect": "virtud", "texto": `IA: Correcto, esa virtud es la que representa ${sobreviviente}.`}} />,
				document.getElementById('root')
			);
		}

		if(fallos == 1) {
			return ReactDOM.createPortal(
				<Story text={{"autor": sobreviviente, "effect": "virtud", "texto": `IA: Correcto, esa virtud es la que representa ${sobreviviente}. Aunque hayas acertado la virtud, tu expresión muestra lo contrario. Basándome en tu inteligencia has fallado como ${fallos} vez en la mente`}} />,
				document.getElementById('root')
			);

		} else {
			return ReactDOM.createPortal(
				<Story text={{"autor": sobreviviente, "effect": "virtud", "texto": `IA: Correcto, esa virtud es la que representa ${sobreviviente}. Aunque hayas acertado la virtud, tu expresión muestra lo contrario. Basándome en tu inteligencia has fallado como ${fallos} veces en la mente`}} />,
				document.getElementById('root')
			);
		}

	}




	return (
		<>		
			<form id="form-virtud" spellCheck="false" onSubmit={correr}>
				<input type="text" placeholder="Virtud" />
			</form>
			{continuar ? virtudCorrecta() : true}
		</>
	)
}

export default virtud