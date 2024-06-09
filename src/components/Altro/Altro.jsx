import React, { useEffect, useState } from "react";

const Altro = ({ getValori }) => {
	// const [val, setValori] = useState([]);
	// useEffect(() => {
	// 	setValori(getValori());
	// 	console.log("Aggiornato altro");
	// }, [getValori]);

	return (
		<div className="altro">
			{getValori.map((valore) => {
				<span key={valore}>{valore}</span>;
			})}
		</div>
	);
};

export default Altro;
