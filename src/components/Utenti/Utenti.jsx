import React from "react";
import "./Utenti.scss";
import Utente from "../Utente/Utente";

const Utenti = ({ users }) => {
	return (
		<div className="utenti d-flex justify-content-center">
			{users.map((valore) => (
				<Utente
					key={valore.id}
					id={valore.id}
					name={valore.name}
				></Utente>
			))}
		</div>
	);
};

export default Utenti;
