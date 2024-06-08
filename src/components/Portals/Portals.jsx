import React from "react";
import ReactDOM from "react-dom";
import "./portals.scss";

const Portals = () =>
	ReactDOM.createPortal(
		<div className="portals">TEST PORTALS</div>,
		document.getElementById("portals")
	);

export default Portals;
