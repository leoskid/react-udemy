import "./App.css";
import Card from "./components/Card/Card";
import Contatore from "./components/Contatatore/Contatore";

function App() {
	return (
		<div className="App">
			<Card testo="Ciao Come va?">
				<Contatore></Contatore>
			</Card>
		</div>
	);
}

export default App;
