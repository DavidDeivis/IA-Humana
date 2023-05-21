import React, {useState, useContext, useRef} from 'react'
import story from '../story/story.jsx'
import { AppContext } from '../AppContext'

const opciones = () => {


	function changeSpeed (data){
		console.log(data);
	}

	const scrollElement = useRef()

	const { scrollAuto, setScrollAuto, speed, setSpeed, estilo, setEstilo, active, setActive } = useContext(AppContext);



	function cambiandoOpcion(e, h){
		h == 1 ? setSpeed(e.value) : setEstilo(e.value)
	}

	function activeOpciones(e){



		active 
		? 
		(
			document.querySelector(".opciones-list").style.display = "none",
			setActive(false)
		)
		: 
		(
			e.children[0].style.display = "flex",
			setActive(true)
		)


	}

	function scrollFunction(){

		if(scrollAuto) {
			scrollElement.current.style.outline = "2px solid #f00";
			setScrollAuto(false)
		}
		else {
			scrollElement.current.style.outline = "2px solid #00f";
			setScrollAuto(true)
			window.scrollTo(0, document.body.scrollHeight);
		} 

	}


	function imgFailed(img) {
		setTimeout(()=>{
			img.target.src = img.target.src;
		}, 1000)
	}


	return (
		<>
		<img ref={scrollElement} onError={(e => imgFailed(e))} onClick={scrollFunction} src="downLinear.png" id="scrollAuto"></img>

		<div id="opciones" onClick={(e) => {!active ? activeOpciones(e.target) : true}}>
			<form className="opciones-list">
				<h3>Opciones</h3>
				<div>
					<label htmlFor="speed">Speed</label>
					<select id="speed" value={speed} onChange={(e)=> cambiandoOpcion(e.target, 1)}>
						<option>Lento</option>
						<option>Rapido</option>
						<option>Instantaneo</option>
					</select>
				</div>
				<div>
					<label htmlFor="estilo">Estilo</label>
					<select id="estilo" value={estilo} onChange={(e)=> cambiandoOpcion(e.target, 2)}>
						<option>Oscuro</option>
					</select>
				</div>

				{active ? <div onClick={(e) => {active ? activeOpciones() : true}} className="opciones-Off"></div> : true}
			</form>
		</div>
		</>
	)
}

export default opciones