import React, { useState, useEffect } from "react";
import Contatore from "../Contatore/Contatore";
import "./Card.scss";
import Utenti from "../Utenti/Utenti";
import Loader from "../Loading/Loader";

const UtentiLoader = Loader(Utenti);

const Card = ({ testo }) => {
	const [users, setUsers] = useState(null);
	const [loading, setLoading] = useState(true);
	const [errore, setErrore] = useState(false);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((values) => {
				setUsers(values);
				setLoading(false);
			})
			.catch((dati) => {
				setErrore(true);
			});
	}, []);

	useEffect(() => {
		if (errore) throw Error();
	});

	return (
		<div className="card d-flex align-items-center">
			{testo}
			<Contatore></Contatore>
			<UtentiLoader users={users} loading={loading}></UtentiLoader>
		</div>
	);
};

export default Card;
