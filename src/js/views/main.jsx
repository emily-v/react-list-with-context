import React from "react";
import { Link } from "react-router-dom";

//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { Navbar } from "../component/navbar.jsx";
import { NewToDo } from "../component/newToDo.jsx";
import { ListItems } from "../component/listItems.jsx";
import { Footer } from "../component/footer.jsx";

export class Main extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-4 mx-auto">
						<div className="card text-center">
							<h3 className="card-header">
								To Do List with Context
							</h3>
							<NewToDo />
							<ListItems />
							<div className="card-footer text-muted">
								X items remaining
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
