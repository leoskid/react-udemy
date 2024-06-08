import "./App.css";
import Card from "./components/Card/Card";
import Portals from "./components/Portals/Portals";
import ErrorBondaries from "./components/Error-bondaries/Error_bondaries";

function App() {
	return (
		<div className="App">
			<ErrorBondaries>
				<Card testo="Ciao come va?"></Card>
			</ErrorBondaries>
			<Portals></Portals>
		</div>
	);
}

export default App;
