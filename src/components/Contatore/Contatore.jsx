import React from "react";
import "./Contatore.scss";

class Contatore extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			numero: {
				valore: 0,
				altroParametro: "Ciao",
			},
			prova: {
				altriParametri: "Ok",
			},
		};
	}

	componentDidUpdate() {
		console.log(this.state);
		console.log("Componente Aggiornato");
	}
	componentDidMount() {
		console.log("Componenet Montato");
	}
	componentWillUnmount() {
		console.log("Componente Smontato");
	}
	incrementa = () => {
		this.setState({
			numero: {
				...this.state.numero,
				valore: this.state.numero.valore + 1,
			},
		});
	};
	decrementa() {
		this.setState({
			numero: {
				...this.state.numero,
				valore: this.state.numero.valore - 1,
			},
		});
	}
	render() {
		const red = {
			color: "#AA0000",
		};
		return (
			<div className="contatore p-3">
				<div
					className={`contatore-number p-3 ${
						this.state.numero.valore >= 5 ? "red" : null
					}`}
				>
					{this.state.numero.valore}
				</div>
				{this.state.numero.valore >= 5 ? (
					<div style={red}>Wow!!!</div>
				) : null}
				<div className="contatore-button-container d-flex justify-content-between">
					<button
						type="button"
						className="contatore-button m-1 d-flex"
						onClick={() => this.decrementa()}
					>
						Decrementa
					</button>
					<button
						type="button"
						className="contatore-button m-1 d-flex"
						onClick={this.incrementa}
					>
						Incrementa
					</button>
				</div>
			</div>
		);
	}
}

export default Contatore;
