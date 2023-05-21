import React, {useState, useContext, useEffect} from 'react';
import Comenzando from '../story/comenzando.jsx';
import { AppContext } from '../AppContext';
import Historia from '../story/textStory.jsx'
import ReactDOM from 'react-dom';
import Story from '../story/story';
import Run from './gameRun'
import Ending2 from '../story/ending2'
import Ending1 from '../story/ending1'

import { Link } from "react-router-dom";

const Decision = (props) => {

  const {speed, setspeed, speedElement, setSpeedElement, countHistory, setCountHistory} = useContext(AppContext);

  const [state, setState] = useState(false)

  const [active, setActive] = useState(false)
  const [select, setSelect] = useState(0)


  const [elements, elementsState] = useState([]);
  const [instancial, setInstancial] = useState(true)
  const [identificador, setIdentificador] = useState(0);

  const [textos, setTextos] = useState([])


      // const buttons = [];
  // const textos = props.text.split(",");

  const [buttons, setButtons] = useState([])


  function avance (eleccion){

  	if(props.end != null){
  		return ReactDOM.createPortal(
			<Link to="end">Secuela</Link>,
			document.getElementById('root')
		);
  	}

  	if(Historia[identificador + 1].type == "desitionOn"){
  		if(eleccion == 1) {

  			return ReactDOM.createPortal(
				<Story text={Ending1[0]} uno />,
				document.getElementById('root')
			);

  		} else {
  			return ReactDOM.createPortal(
				<Story text={Ending2[0]} dos />,
				document.getElementById('root')
			);
  		}
  	}

  	if(eleccion == 1) {

  		if(Historia[identificador + 1].type == "Run"){

  			return ReactDOM.createPortal(
				<Run />,
				document.getElementById('root')
			);

  		} 

	  	return ReactDOM.createPortal(
			<Story text={Historia[identificador + 1]} />,
			document.getElementById('root')
		);
		
  	}

  	if(eleccion == 2) {
	  	return ReactDOM.createPortal(
			<div>Decision dos</div>,
			document.getElementById('root')
		);
  	}

   	if(eleccion == 3) {
	  	return ReactDOM.createPortal(
			<div>Decision tres</div>,
			document.getElementById('root')
		);
  	}

  }

  function desitionOn (e, desition){

  	if(!state){
  		e.classList.add("elegido");


  		setSelect(desition);

  		setState(true);

  		setActive(true);




  		var father = e.parentElement;

	  	for (let i of father.children){
	  		if(!i.classList.contains("elegido")){
	  			i.classList.add("buttonDesactive");
	  			i.classList.remove("buttonDesition");

	  		}
	  	}
  	}


  }



  function creation() {

    let num = textos.length;

    const prevButtons = [];

    for (let i = 0; i < num; i++) {
    
      prevButtons.push(
      	<button onClick={(event) => desitionOn(event.target, i + 1)} className="buttonDesition" key={i}>{textos[i]}</button>
      );
    }

    return prevButtons;

    setButtons(prevButtons);


  
  }

  useEffect(() => {
  	setIdentificador(countHistory);
  	setCountHistory(countHistory + 1);
  	setTextos(props.text.split(","))
  }, [])


  return <div>
  	<div className="container-buttons">
  	  	{instancial ? creation() : true}
  	 </div>

  	{active ? avance(select) : true}
  </div>;

};

export default Decision;
