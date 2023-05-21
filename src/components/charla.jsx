import React, {useState, useContext, useEffect, useRef} from 'react';
import Story from '../story/story'
import ReactDOM from 'react-dom'
import { AppContext } from '../AppContext';


import Akisha from '../response/Akisha'
import Isami from '../response/Isami'
import Zefio from '../response/Zefio'
import Prota from '../response/Prota'

let numerito = 0;

const charla = () => {

	const myElementRef = useRef();

	const {nombre, vivientes, setVivientes, numCharla, setNumCharla} = useContext(AppContext);

	const [id, setId] = useState(1)

	const [count, setCount] = useState(0)
	const [charla, setCharla] = useState(1)

	const [state, setState] = useState(false)

	const [state1, setState1] = useState(false)
	const [state2, setState2] = useState(false)
	const [state3, setState3] = useState(false)
	const [state4, setState4] = useState(false)
	const [state5, setState5] = useState(false)

	const [vivos, setVivos] = useState([]);


	useEffect(() => {

		setTimeout(()=>{

		if(count == 1) setState1(true)
		if(count == 2) setState2(true)
		if(count == 3) setState3(true)
		if(count == 4) setState4(true)
		if(count == 5) setState5(true)


		}, 30)

	}, [count])


	function aumentando () {
		setCount(count + 1);
	}

	function final () {

		myElementRef.current.classList.add("charla-end");
		
		return ReactDOM.createPortal(
			<Story text={{"texto": "IA: Interesante"}} />,
			document.getElementById('root')
		);
	
	}


	function charlando (argument) {

		let a = vivos;

		// console.log(a);

		if(argument == "Akisha" && a.includes("Akisha")){
			return <Story aumentando={aumentando} charla="yes" text={{"texto": Akisha[id].msg}} />;
		} else if(state1 && argument == "Akisha") {
			setCount(count + 1);
			setState1(false);
			setState2(true);
		}

		if(argument == "Isami" && a.includes("Isami")){
			return <Story aumentando={aumentando} charla="yes" text={{"texto": Isami[id].msg}} />;
		} else if(state2 && argument == "Isami") {
			setCount(count + 1);
			setState2(false);
			setState3(true);
		}

		if(argument == nombre && a.includes("Name") || argument == nombre && a.includes(nombre)){
			return <Story aumentando={aumentando} charla="yes" text={{"texto": Prota[id].msg}} />;
		} else if(state3 && argument == nombre) {
			console.log(a);
			setCount(count + 1);
			setState3(false);
			setState4(true);
		}

		if(argument == "Zefio" && a.includes("Zefio")){
			return <Story aumentando={aumentando} charla="yes" text={{"texto": Zefio[id].msg}} />;
		} else if(state4 && argument == "Zefio") {
			setCount(count + 1);
			setState4(false);
			setState5(true);
		}

	}

	useEffect(() => {

		setId(numCharla);
		setNumCharla(numCharla + 1);
		setVivos(vivientes);
		setCount(count + 1);

	}, [])

	return (
		<div ref={myElementRef} className="charla">
			{state1 && charlando("Akisha")}
			{state2 && charlando("Isami")}
			{state3 && charlando(nombre)}
			{state4 && charlando("Zefio")}
			{state5 && final()}
		</div>
	)
}

export default charla