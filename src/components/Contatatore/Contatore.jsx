import React from "react";
import "./Contatore.scss";

class Contatore extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidUpdate() {
		console.log("Componente Aggiornato");
	}
	componentDidMount() {
		console.log("Componenet Montato");
	}
	componentWillUnmount() {
		console.log("Componente Smontato");
	}
	render() {
		return <div className="contatore"></div>;
	}
}

export default Contatore;
