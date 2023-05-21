import React, {useState, useEffect, useContext, useRef} from 'react'
import ReactDOM from 'react-dom'
import { AppContext } from '../AppContext';
import Story from './story.jsx';
import Historia from './textStory.jsx'
import Desition from '../components/desition.jsx'
import Nombre from './nombre'
import Lista from '../components/lista'
import Charla from '../components/charla'
import Virtud from '../components/virtud'
import Ending2 from './ending2'
import Ending1 from './ending1'
import { Link } from "react-router-dom";

const Story1 = (props) => {

	const myElementRef = useRef();

	const {nombre, speed, scrollAuto, setTextFinalEnding, setspeed, countHistory, setCountHistory, sobreviviente} = useContext(AppContext);

	var text = props.text;

	text.texto = text.texto.replace(/Name/g, nombre);
	text.texto = text.texto.replace(/Sobreviviente/g, sobreviviente);

	const [cantidad, setCantidad] = useState(0);
	const [stateText, setStateText] = useState("");

	const [state, setState] = useState("");
	const [num, setNum] = useState(0);
	const [inicial, setInicial] = useState(false)

	const [finaltext, setFinaltext] = useState(false)
	const [fast, setFast] = useState(false)

	const [identificador, setIdentificador] = useState(0);

	const [parent, setParent] = useState(false)

	function nombreIntroducido(e){
		e.preventDefault();
		setInicial(true);
	};

	useEffect(() => {
		if(parent){
			props.aumentando();
		}
	}, [parent])


	function respuestaAlEliminado() {

		if(props.text.autor == "Akisha") return "IA: Intentaré que tu libertad nunca se olvide";
		if(props.text.autor == "Isami") return "IA: Lo lamento pero se debe retirar por donde entró. Me caías bien (le guiña su ojo de IA)";
		if(props.text.autor == "Zefio") return "IA: No todo se puede";

	}

	function respuestaVirtud() {

		if(props.text.autor == "Akisha") return "Akisha: Me encanta representa la Libertad";
		if(props.text.autor == "Isami") return "Isami: Que lo digan en voz alta es vergonzoso";
		if(props.text.autor == "Zefio") return "Zefio: Me alegra seguir teniéndo mis ideales conmigo";

	}

	function end() {

		if(finaltext){

			if(props.charla == "yes" && !parent){
				setParent(true);
				return;
			}

			if(props.charla == "yes") return;
		
			if(parent == true) return;

			if(props.text.effect == "eliminado"){	
				return ReactDOM.createPortal(
					<Story text={{"texto": respuestaAlEliminado()}} />,
					document.getElementById('root')
				);
			}

			if(props.text.effect == "virtud"){	
				return ReactDOM.createPortal(
					<Story text={{"texto": respuestaVirtud()}} />,
					document.getElementById('root')
				);
			}

			if(props.text.etapa != undefined){

				var newText;
				var etapa;

				if(props.text.etapa == "ending1") etapa = "ending1"
				else etapa = "ending2";

				if(etapa == "ending1") {
					if(Ending1[identificador + 1].type == "texto") {
						newText = Ending1[identificador + 1].texto.replace(new RegExp("Name", 'g'), nombre);
					}
				}

				if(etapa == "ending2"){
					if(Ending2[identificador + 1].type == "texto"){
						newText = Ending2[identificador + 1].texto.replace(new RegExp("Name", 'g'), nombre);
					}
				}

				if(newText == undefined) {
					if(etapa == "ending1"){
						return ReactDOM.createPortal(
					      <Link to="end" id="linkEnd">{Ending1[identificador + 1].texto}</Link>,
					      document.getElementById('root')
					    );
					} else {
						return ReactDOM.createPortal(
					      <Link to="end" id="linkEnd">{Ending2[identificador + 1].texto}</Link>,
					      document.getElementById('root')
					    );
					}
				}

				return ReactDOM.createPortal(
				   <Story text={{"texto": newText, "etapa": etapa}} />,
				   document.getElementById('root')
				 );

				return;
			}

			if(Historia[identificador + 1].effect == "sobrevive"){

				var newText;

				if(sobreviviente == "Akisha") newText = "Akisha: Corre... no me queda mucho tiempo de vida";
				if(sobreviviente == "Isami") newText = "Isami: No te paralices... corre. Estaré bien";
				if(sobreviviente == "Zefio") newText = "Zefio: No hay forma de salvarme... corre por mí";

				newText = newText.replace(new RegExp("Name", 'g'), nombre);

				return ReactDOM.createPortal(
			    	<Story text={{"texto": newText}} />,
			    	document.getElementById('root')
			    )

			}

			if(Historia[identificador + 1].type == "escapar") {

				var newText;

				if(sobreviviente == "Akisha") newText = "Akisha: Es momento de escapar de aquí (te sujeta de la mano y corren de la IA)";
				if(sobreviviente == "Isami") newText = "Isami: Recciona, debemos correr (te sujeta de la mano y corren de la IA)";
				if(sobreviviente == "Zefio") newText = "Zefio: Vámonos, rápido (te sujeta de la mano y corren de la IA)";

				newText = newText.replace(new RegExp("Name", 'g'), nombre);

				return ReactDOM.createPortal(
			      <Story text={{"texto": newText}} />,
			      document.getElementById('root')
			    );
			}

			if(Historia[identificador + 1].type == "virtud") {
				return ReactDOM.createPortal(
			      <Virtud />,
			      document.getElementById('root')
			    );
			}

			if(Historia[identificador + 1].type == "texto") {

				var newText;

					if(newText == undefined){
						newText = Historia[identificador + 1].texto.replace(new RegExp("Name", 'g'), nombre);
					}

					return ReactDOM.createPortal(
				      <Story text={{"texto": newText}} />,
				      document.getElementById('root')
				    );
		

			}

			if(Historia[identificador + 1].type == "nombre") {
				return ReactDOM.createPortal(
			      <Nombre />,
			      document.getElementById('root')
			    );
			}

			if(Historia[identificador + 1].type == "charla") {
				return ReactDOM.createPortal(
			      <Charla />,
			      document.getElementById('root')
			    );
			}


			if(Historia[identificador + 1].type == "desition") {

				let textEdit = Historia[identificador + 1].texto;
				textEdit = textEdit.replace(new RegExp("Sobreviviente", "g"), sobreviviente)

				return ReactDOM.createPortal(
			      <Desition text={textEdit} />,
			      document.getElementById('root')
			    );
			}

			if(Historia[identificador + 1].type == "lista") {
				return ReactDOM.createPortal(
			      <Lista condicional={Historia[identificador + 1].effect} />,
			      document.getElementById('root')
			    );
			}

			if(Historia[identificador + 1].type == undefined) {
				return ReactDOM.createPortal(
			      <div>Terminado</div>,
			      document.getElementById('root')
			    );
			}

			if(Historia[identificador + 1].type == "pasoDosStart") {

				var newText = Historia[identificador + 1].texto.replace(new RegExp("Name", 'g'), nombre);
				newText = newText.replace(new RegExp("Sobreviviente", 'g'), sobreviviente);

				return ReactDOM.createPortal(
			      <Story pasoDos text={{"texto": newText}} />,
			      document.getElementById('root')
			    );
			}

		}

	}


	useEffect(() => {

	  	if(props.text.effect == "reset"){
	  		setIdentificador(0);
	  		setCountHistory(0);
	  	} else {
	  		setIdentificador(countHistory);
	  	}

	  	setCantidad(text.texto.length);
	  	setStateText("");

	  	if(props.uno){

			let textimonio = "Al aceptar lo que propuso la IA, se puso en marcha, sujetó a Sobreviviente y se lo llevo en su hombro y los tres salimos por el sistema de teletransportación. Afuera nos llevamos una gran sorpresa, estaban todos disfrutando una gran fiesta por cumplir con exito el objetivo de la instalación";
			textimonio = textimonio.replace(new RegExp("Sobreviviente", 'g'), sobreviviente);

			setTextFinalEnding(textimonio);
		} else if(props.dos){

			let textimonio = "Acepté tomarle la mano a la IA y nos ayudó a Sobreviviente y a mí al salir de la instalación por el sistema de teletransportación. Afuera nos llevamos una gran sorpresa, estaban todos disfrutando una gran fiesta por cumplir con exito el objetivo de la instalación";
			textimonio = textimonio.replace(new RegExp("Sobreviviente", 'g'), sobreviviente);

			setTextFinalEnding(textimonio);
		}

	}, [])

	useEffect(() => {

		if(scrollAuto) window.scrollTo(0, document.body.scrollHeight);

		if(finaltext) return;

		if(speed == "Instantaneo") {

			setTimeout(()=>{
				setStateText(text.texto);
				setFinaltext(true);
			}, 50)

			if(props.charla != "yes" && props.text.effect != "eliminado") {

				if(props.text.effect == "reset"){
					setCountHistory(1);
				} else {
					setCountHistory(countHistory + 1);
				}
			}
			return;
	  	}

	  	let setVelocidad;

	  	speed == "Rapido" ? setVelocidad = 15 : setVelocidad = 30;

	  	if(props.charla == "yes" || props.text.effect == "eliminado") {

	  		text.texto[num] != undefined ? 
		  	(
		  		setTimeout(()=>{
		  			setNum(num + 1),
			  		setStateText(stateText + text.texto[num])
		  		}, setVelocidad)
			
		  ) : (
		  setFinaltext(true)
		  )

	  	} else {

	  		text.texto[num] != undefined ? 
		  	(
		  		setTimeout(()=>{
		  			setNum(num + 1),
			  		setStateText(stateText + text.texto[num])
		  		}, setVelocidad)
			
		  ) : (
		  setFinaltext(true),
		  setCountHistory(countHistory + 1)
		  )

	  	}

	}, [stateText])


	return (
		<div className="texteando">
			<h3 ref={myElementRef}>{stateText}</h3>
			{finaltext ? end() : true}
		</div>
	)
}


export default Story1