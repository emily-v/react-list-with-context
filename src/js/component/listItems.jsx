import React from "react";
import { Context } from "../store/appContext.jsx";

export class ListItems extends React.Component {
	constructor(props) {
		super(props);
		this.itemToDelete = React.createRef();
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<ul className="list-group">
							{store.listOfItems.map((item, index) => {
								// let liStyle =
								// 	"list-group-item d-flex justify-content-between";
								return (
									<li
										key={index}
										className={
											item.isDone
												? "done list-group-item d-flex justify-content-between"
												: "list-group-item d-flex justify-content-between"
										}
										ref={this.itemToDelete}>
										<input
											className="form-check-input"
											type="checkbox"
											value={item.isDone}
											onChange={
												item.isDone
													? () =>
															actions.markNotDone(
																index
															)
													: () =>
															actions.markDone(
																index
															)
											}
											checked={item.isDone}
										/>
										{item.itemText}
										<span
											onClick={() =>
												actions.deleteItem(index)
											}>
											&times;
										</span>
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
