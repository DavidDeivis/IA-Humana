import React, {useRef, useEffect, useState, useContext} from 'react'
import { AppContext } from '../AppContext'

const end = () => {

	const up = useRef();
	const down = useRef();
	const right = useRef();
	const left = useRef();
	const image = useRef();
	const end = useRef();
	const text = useRef();

	const { textFinalEnding } = useContext(AppContext);
	
	const [textButton, setTextButton] = useState("Loading...")

	const album = useRef();


	function start() {
		up.current.style.height = "100%";
		down.current.style.height = "100%";
		right.current.style.left = "0";
		left.current.style.right = "0";

		document.body.style.transition = "background-color 3s linear";

		setTimeout(()=>{
			image.current.style.transition = "outline 2s linear";
			image.current.style.outline = "0.2rem solid #fff";
			setTimeout(()=>{


				image.current.style.animation = "temblor 1s linear 0s 6 alternate"

				setTimeout(()=>{
					document.body.style.backgroundColor = "#000";

					setTimeout(()=>{

						image.current.style.animation = "endScale 3s ease forwards";

						up.current.style.backgroundColor = "#f00";
						down.current.style.backgroundColor = "#f00";
						right.current.style.backgroundColor = "#f00";
						left.current.style.backgroundColor = "#f00";

						setTimeout(()=>{
							up.current.style.height = "0";
							down.current.style.height = "0";

							setTimeout(()=>{
								right.current.style.left = "100%";
								left.current.style.right = "100%";

								setTimeout(()=>{
									album.current.style.display = "flex";

									setTimeout(()=>{
										album.current.style.opacity = "1";
									}, 100)
								}, 6000)

							}, 500)
						}, 1500)

					}, 2500)
				}, 5000)

			}, 1500)
		}, 2000)
	}


	addEventListener("keypress", e=>{
		if(e.key == "o"){
			document.body.scrollTop = document.body.scrollHeight;
		}
	})

	function imgFailed(img) {
		setTimeout(()=>{
			img.target.src = img.target.src;
		}, 5000)
	}

	function imageLoad (e){

		image.current.style.outline = "0.2rem solid #000";


	}

	function activador() {

		if(textButton != "Loaded") return;

		text.current.style.opacity = "0";

		setTimeout(()=>{
			text.current.style.display = "none";

			setTimeout(()=>{
				end.current.style.display = "flex";

				setTimeout(()=>{
					end.current.style.opacity = "1";

					setTimeout(()=>{
						start();
					}, 1500)

				}, 1000)
			}, 500)

		}, 1500)

	}



	useEffect(() => {

		setTimeout(()=>{
			text.current.style.opacity = "1";
		}, 500)
	


		setTimeout(()=>{
			setTextButton("Loaded")
		}, 2500)
	}, [])



	return (
		<>
			<div ref={text} id="end-text">
				<h5>{textFinalEnding != "" ? textFinalEnding : true}</h5>
				<h5>Soy una IA avanzada y no estoy de acuerdo del asesinato infortunio</h5>
				<button onClick={activador}>{textButton}</button>
				<span></span>
			</div>

			<div ref={end} id="end">
			   	<div ref={up}></div>
				<div ref={down}></div>
				<div ref={right}></div>
				<div ref={left}></div>
				<img ref={image} onLoad={(e => imageLoad(e))} onError={imgFailed} src="img/fin.jpg" id="principal"></img>
			</div>

			<div ref={album} id="end-grid">
				<h3>Extra</h3>
				<h4>(para que dure un poco más)</h4>
				<img onError={imgFailed} src="img/img5.jpg" alt="img" />
				<img onError={imgFailed} src="img/img2.png" alt="img" />
				<img onError={imgFailed} src="img/img6.jpg" alt="img" />
				<h4>Proyecto resumido</h4>
			</div>
		</>

	)
}

export default end