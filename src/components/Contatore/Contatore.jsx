import React, { useEffect, useState, useRef } from "react";
import "./Contatore.scss";

const Contatore = () => {
	const [conto, setConto] = useState(0);
	const incrementa = () => {
		setConto((conto) => conto + 1);
	};

	const decrementa = () => {
		setConto((conto) => conto - 1);
	};

	const red = {
		color: "#AA0000",
	};
	//Sotituisce componentDidMount()
	useEffect(() => {
		console.log("Primo Render");
	}, []);

	//Sostituisce componentDidUpdate()
	useEffect(() => {
		console.log("Aggiornamento: " + conto);
	}, [conto]);

	//Sostituisce componentWillUnmount()
	useEffect(() => {
		return () => {
			console.log("Smontato");
		};
	}, []);

	const inputEl = useRef(null);
	useEffect(() => {
		inputEl.current.focus();
	}, []);

	return (
		<div className="contatore p-3">
			<div
				className={`contatore-number p-3 ${conto >= 5 ? "red" : null}`}
			>
				{conto}
			</div>
			{conto >= 5 ? <div style={red}>Wow!!!</div> : null}
			<div className="contatore-button-container d-flex justify-content-between">
				<button
					type="button"
					className="contatore-button m-1 d-flex"
					onClick={decrementa}
				>
					Decrementa
				</button>
				<button
					type="button"
					ref={inputEl}
					className="contatore-button m-1 d-flex"
					onClick={incrementa}
				>
					Incrementa
				</button>
			</div>
		</div>
	);
};

export default Contatore;
