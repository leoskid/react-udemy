import React from "react";
import "./Card.scss";

function Card({ testo, children }) {
	return (
		<div className="card">
			{testo}
			<hr />
			{children}
		</div>
	);
}

export default Card;
