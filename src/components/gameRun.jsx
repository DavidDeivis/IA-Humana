import React, {useEffect, useState, useRef, useContext} from 'react'
import ReactDom from 'react-dom'
import Story from '../story/story'
import History from '../story/textStory'
import { AppContext } from '../AppContext'

const gameRun = () => {

	const {countHistory, setCountHistory} = useContext(AppContext);

	const flecha1 = useRef();
	const flecha2 = useRef();
	const time = useRef();
	const [timeNum, setTimeNum] = useState(80)
	const [inicial, setInicial] = useState(false)
	const [correr, setCorrer] = useState(false)
	const [id, setId] = useState(0)

	const [etapa, setEtapa] = useState("low")
	const [mov, setMov] = useState("")
	const [good, setGood] = useState(false)
	const [fin, setFin] = useState(false)
	const [continuar, setContinuar] = useState(false)

	const [reset, setReset] = useState(false)

	const [num, setNum] = useState(0)

	function start (){

		if(inicial) return;
		setInicial(true);
		corriendo();
		
	}

	useEffect(() => {

		if(!correr || fin) return;

		if(timeNum == 0) {
			if(num != 30) {

				setTimeout(()=>{
					flecha1.current.classList.remove("oneUp");
					flecha1.current.classList.remove("oneLeft");
					flecha2.current.classList.remove("twoUp");
					flecha2.current.classList.remove("twoRight");

					setFin(false)
					setCorrer(false)
					setNum(0);
					setReset(true);
					derrota();

				}, 1200)
				setFin(true)

			} 
		}

		let tiempo = 3000;

		if(etapa == "low") tiempo = 75;
		if(etapa == "half") tiempo = 75;
		if(etapa == "hard") tiempo = 75;

		time.current.style.width = `${timeNum}%`;

		setTimeout(()=>{

			if(good) {
				if(timeNum + 15 > 80) {
					setTimeNum(80);
				} else setTimeNum(timeNum + 15);
				setGood(false);
			}
			else {
				setTimeNum(timeNum - 1);
			} 

		}, tiempo)

	}, [timeNum])


	function continuando(){

		return ReactDom.createPortal
		(
			<Story text={History[id + 1]} />,
			document.getElementById("root")
		)

	}


	function victoria() {
		let a = document.getElementById("gameRun");
		a.classList.add("victoria");

		setTimeout(()=>{

			a.classList.add("victoria-after");

			setTimeout(()=>{

				setContinuar(true);

			}, 1000)

		}, 2000)
	}

	useEffect(() => {

		if(reset){
			setReset(false);
	
			setTimeout(()=>{
				corriendo();
			}, 3000)
	
		}

	}, [reset])


	function derrota() {

		let a = document.getElementById("gameRun");
		a.classList.add("derrota");

		setTimeout(()=>{

			a.classList.add("derrota-after");
			setTimeNum(80);
			setGood(false);


			setTimeout(()=>{

				a.classList.remove("derrota-after");
				setFin(false);
				
				setTimeout(()=>{

					time.current.style.width = "80%";

				}, 500)

			}, 1500)

		}, 1000)
	}


	function corriendo() {

		if(fin) return;

		if(correr) setGood(true);

		let a = Math.round(Math.random());

		if(num < 2){

			setTimeout(()=>{

				if(fin) return;

				if(mov == "left") {
					flecha2.current.classList.add("twoUp");
					setMov("right");
				} else if (mov == "right") {
					flecha1.current.classList.add("oneUp");
					setMov("left");
				} else {
					if(a == 0){
						flecha1.current.classList.add("oneUp");
						setMov("left");
					} else {
						flecha2.current.classList.add("twoUp");
						setMov("right")	
					}
				}

			}, 1000)

			setNum(num + 1);
			return;

		}

		if(num < 7) {

			setTimeout(()=>{

				if(fin) return;

				setEtapa("half")

				if(mov == "left"){
					flecha2.current.classList.add("twoUp");
					setMov("right");
				} else {
					flecha1.current.classList.add("oneUp");
					setMov("left");
				}

			}, 500)

			setNum(num + 1);
			return;

		}

		let velocity;

		if(num < 10) velocity = 250;
		else velocity = 10;

		if(num < 25) {

			setTimeout(()=>{

				if(fin) return;

				setEtapa("hard")

				if(mov == "left"){

					let b = Math.round(Math.random());

					if(b == 0){
						flecha2.current.classList.add("twoUp");
					} else {
						flecha2.current.classList.add("twoRight");
					}

					setMov("right");
				} else {

					let b = Math.round(Math.random());

					if(b == 0){
						flecha1.current.classList.add("oneUp");
					} else {
						flecha1.current.classList.add("oneLeft");
					}

					setMov("left");
				}

			}, velocity)

			setNum(num + 1);
			return;

		}

		if(num == 25) {
			flecha1.current.classList.remove("oneUp");
			flecha1.current.classList.remove("oneLeft");
			flecha2.current.classList.remove("twoUp");
			flecha2.current.classList.remove("twoRight");
			setFin(true)
			setCorrer(false)

			victoria();
		}



	}

	function clickeado (){

		flecha1.current.classList.remove("oneUp");
		flecha1.current.classList.remove("oneLeft");
		flecha2.current.classList.remove("twoUp");
		flecha2.current.classList.remove("twoRight");

		setTimeNum(timeNum - 1);
		setCorrer(true);

		corriendo();
	
	}

	useEffect(() => {
		start();
		setId(countHistory);
		setCountHistory(countHistory + 1);
	}, [])




	return (
		<>
			<div id="gameRun" className="">
				<div ref={flecha1} onClick={clickeado} className=""></div>
				<div ref={flecha2} onClick={clickeado} className=""></div>
				<div style={{transition : "width 1s"}} ref={time}></div>
			</div>
			{continuar ? continuando() : true}
		</>
	)
}

export default gameRun