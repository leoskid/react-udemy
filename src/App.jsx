import { useState, createContext } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Portals from "./components/Portals/Portals";
import ErrorBondaries from "./components/Error-bondaries/Error_bondaries";
import ThemeProvider from "./contexts/theme-context";

function App() {
	return (
		<div className="App">
			<ErrorBondaries>
				<ThemeProvider>
					<Card testo="Ciao come va?"></Card>
					<button>Cambia colore</button>
				</ThemeProvider>
			</ErrorBondaries>
			<Portals></Portals>
		</div>
	);
}

export default App;
