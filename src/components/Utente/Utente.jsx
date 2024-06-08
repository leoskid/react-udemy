import React from "react";
import "./Utente.scss";

function Utente(props) {
	const { id } = props;
	const { name } = props;
	return (
		<div className="utenti d-flex justify-content-center">
			<div
				key={id}
				className="utente d-flex flex-column justify-content-center align-items-center p-3"
			>
				<span className="me-2">{id}</span>
				<span>{name}</span>
			</div>
		</div>
	);
}

export default Utente;
