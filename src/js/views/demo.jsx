import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container">
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div>
									<img
										src={
											store.data.posts[1].attachments[2]
												.images.thumbnail.url
										}
										width="150"
										height="150"
									/>
									<img
										src={
											store.data.posts[1].attachments[1]
												.images.thumbnail.url
										}
										width="150"
										height="150"
									/>
									<p>{store.data.posts[1].content}</p>
									{/*would need to apply dangerouslySetInnerHTML for text formatting*/}
								</div>
							);
							/*return store.demo.map((item, index) => {
								return (
									<li
										key={index}
										className="list-group-item d-flex justify-content-between"
										style={{ background: item.background }}>
										<Link to={"/single/" + index}>
											<span>Link to: {item.title}</span>
										</Link>
										<p style={{ color: item.initial }}>
											{
												"Check store/store.js scroll to the actions to see the code "
											}
										</p>
										<button
											className="btn btn-success"
											onClick={() =>
												actions.changeColor(
													index,
													"orange"
												)
											}>
											Change Color
										</button>
									</li>
								);
							});*/
						}}
					</Context.Consumer>
				</ul>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
