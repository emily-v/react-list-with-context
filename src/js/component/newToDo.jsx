import React from "react";
import { Context } from "../store/appContext.jsx";

export class NewToDo extends React.Component {
	constructor(props) {
		super(props);
		this.newItem = React.createRef();
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					// create function variable to handle all actions on submit
					let handleSubmit = e => {
						e.preventDefault();
						actions.addToDo(this.newItem.current.value);
						this.newItem.current.value = ""; // clear input field on submit
					};
					return (
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								className="form-control"
								placeholder="What needs to be done?"
								ref={this.newItem} //pass ref current value to addToDo from actions in store
							/>
						</form>
					);
				}}
			</Context.Consumer>
		);
	}
}
