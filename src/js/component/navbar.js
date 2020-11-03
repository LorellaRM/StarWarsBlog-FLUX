import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let deleteFav = indexFav => {
		console.log("delete function");
		store.favorites.splice(indexFav, 1);
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					src="https://tendencybook.com/wp-content/uploads/2019/08/star-wars-.png"
					className="navbar-brand mb-0"
				/>
			</Link>
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Show favorites
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favorites.map((eachFavorite, index) => {
						return (
							<li key={index} className="dropdown-item">
								{eachFavorite}
								<button
									className="btn btn-danger"
									onClick={() => {
										deleteFav(index);
									}}>
									Del
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};
