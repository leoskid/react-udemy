import React from "react";
import "./loader.scss";

const Loader = (ComponenteWrappato) => {
	const Caricamento = ({ loading, ...altreProps }) => {
		return loading ? (
			<div className="loading"></div>
		) : (
			<ComponenteWrappato {...altreProps} />
		);
	};
	return Caricamento;
};

export default Loader;
