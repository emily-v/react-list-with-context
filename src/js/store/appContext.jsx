import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState(this);
		}

		componentDidMount() {
			// Set your fetchs/Ajax requests here.
			// make sure you're using the store: this.state.store
			fetch("https://assets.breatheco.de/apis/fake/weird_portfolio.php")
				.then(response => {
					if (response.status !== 200) {
						console.log(
							"Looks like there was a problem. Status Code: " +
								response.status
						); // server test
						return;
					}

					// Examine the text in the response
					response.json().then(data => {
						let store = this.state.store;
						store.data = data;
						this.setState({ store });
					});
				})
				.catch(err => {
					console.log("Fetch Error :-S", err);
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
