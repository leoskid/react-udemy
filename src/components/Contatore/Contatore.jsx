import React, { useEffect, useState, useRef } from "react";
import "./Contatore.scss";
import { useTheme } from "../../contexts/theme-context";

const Contatore = () => {
	const darkButton = {
		backgroundColor: "#333333",
		color: "#EEEEEE",
	};

	const lightButton = {
		backgroundColor: "#EEEEEE",
		color: "#333333",
	};
	const [conto, setConto] = useState(0);

	const { darkTheme, setTheme } = useTheme();

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
					style={darkTheme ? darkButton : lightButton}
					type="button"
					className="contatore-button m-1 d-flex"
					onClick={decrementa}
				>
					Decrementa
				</button>

				<button
					style={darkTheme ? darkButton : lightButton}
					type="button"
					ref={inputEl}
					className="contatore-button m-1 d-flex"
					onClick={incrementa}
				>
					Incrementa
				</button>
			</div>
			<button onClick={setTheme}>Cambia colore</button>
		</div>
	);
};

export default Contatore;
