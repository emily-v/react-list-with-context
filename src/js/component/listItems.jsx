import React from "react";
import { Context } from "../store/appContext.jsx";

export class ListItems extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<ul className="list-group text-left">
							{store.listOfItems.map((item, index) => {
								return (
									<li key={index} className="list-group-item">
										{item.itemText}
									</li>
								);
							})}
						</ul>
					);
				}}
			</Context.Consumer>
		);
	}
}
