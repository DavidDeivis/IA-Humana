import React, {useState, useEffect, useContext} from 'react'
import ReactDOM from 'react-dom'
import { AppContext } from '../AppContext';
import Story from './story.jsx';
import Historia from './textStory.jsx'

const Comenzando = (props) => {

	const {setNombre, speed, setspeed, speedElement, setSpeedElement, countHistory, setCountHistory} = useContext(AppContext);

	var text = props.text;

	const [cantidad, setCantidad] = useState(0);
	const [stateText, setStateText] = useState("");
	const [newText, setNewText] = useState("");
	
	const [state, setState] = useState("");
	const [num, setNum] = useState(0);
	const [inicial, setInicial] = useState(false)

	const [finaltext, setFinaltext] = useState(false)
	const [fast, setFast] = useState(false)

	function continuar(){
		return ReactDOM.createPortal(
	      <Story text={newText} />,
	   	  document.getElementById("root")
	    );
	}


	function nombreIntroducido(e){
		e.preventDefault();

		let name = e.target.children[0].value.trim();

		if(name == "") return;

		setNombre(e.target.children[0].value);
		setCountHistory(countHistory + 1);
		setInicial(true);
	};
	
	function end() {

	    return ReactDOM.createPortal(
	      <form id="form-initial" onSubmit={nombreIntroducido}>
	        <input spellCheck="false" type="text" placeholder="Introduce tu nombre" />
	        <input type="submit" value="Jugar" />
	      </form>,
	      document.getElementById('root')
	    );

	}


	useEffect(() => {

		if(speed == "Instantaneo") {
	  		setFinaltext(true)
	  		setState(text);
	  		return;
	  	}

		if(speed == "Lento") setSpeedElement(300);
	  

	  	if(speed == "Rapido") setSpeedElement(15);
	 

		if(speed == "Instantaneo") return;

		  	text[num] != undefined ? 
		  	(

		  		fast ? (setState(text), setFinaltext(true)) : 
		  		(
			  		setTimeout(()=>{

						setState(state + text[num]);
						setNum(num + 1);

					}, speedElement)
		  		)
			
		  ) : setFinaltext(true)

	}, [state])


	function texteandoTexto (){
		  	stateText[num] != undefined ? 
		  	(

		  		fast ? (setState(text), setFinaltext(true)) : 
		  		(
			  		setTimeout(()=>{

						setState(stateText + stateText[num]);
						setNum(num + 1);

					}, speedElement)
		  		)
			
		  ) : setFinaltext(true)
	}

	  useEffect(() => {

	  	if(Historia[countHistory] == undefined) return;

	  	setCantidad(text.texto.length);
		setStateText(text.texto);

		setNewText(Historia[countHistory + 1]);

	  	setCountHistory(countHistory + 1);

	  	texteandoTexto();

	  	if(speed == "Instantaneo") return;
	  	
	  }, [])



	return (
		<div className="texteando">
			<h3>{stateText}</h3>
			{finaltext ? end() : true}
			{inicial ? continuar() : true}
		</div>
	)
}


export default Comenzando