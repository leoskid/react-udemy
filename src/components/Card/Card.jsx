import React from "react";
import Contatore from "../Contatore/Contatore";
import "./Card.scss";
import Utenti from "../Utenti/Utenti";
import Loader from "../Loading/Loader";

const UtentiLoader = Loader(Utenti);

class Card extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
			loading: true,
			errore: false,
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((values) => {
				this.setState({
					users: values,
					loading: false,
				});
			})
			.catch((dati) => {
				console.log(dati);
				this.setState({ errore: true });
			});
	}

	render() {
		if (this.state.errore) {
			throw Error();
		}
		const { testo } = this.props;
		return (
			<div className="card d-flex align-items-center">
				{testo}
				<Contatore></Contatore>
				<UtentiLoader
					users={this.state.users}
					loading={this.state.loading}
				></UtentiLoader>
			</div>
		);
	}
}

export default Card;
