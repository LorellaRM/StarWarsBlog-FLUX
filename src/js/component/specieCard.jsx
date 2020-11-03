import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const SpecieCard = props => {
	const { store, actions } = useContext(Context);
	let specieTitle = props.specieName;
	return (
		<div className="card">
			<img
				src="https://sm.ign.com/ign_es/screenshot/default/image_n95t.jpg"
				className="card-img-top"
				alt="Star Wars some species"
			/>
			<div className="card-body">
				<h5 className="card-title">{specieTitle}</h5>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Classification: {props.specieClassification}</li>
					<li className="list-group-item">Language: {props.specieLanguage}</li>
				</ul>
				<div className="d-flex justify-content-between mt-2">
					<Link to={"/species/" + specieTitle}>
						<button className="btn btn-primary">Show more</button>
					</Link>
					<button
						className="btn btn-danger"
						onClick={() => {
							actions.setFavorites(specieTitle);
							console.log("Array after: ", store.favorites);
						}}>
						Fav
					</button>
				</div>
			</div>
		</div>
	);
};

SpecieCard.propTypes = {
	specieName: PropTypes.string,
	specieClassification: PropTypes.string,
	specieHomeworld: PropTypes.string,
	specieLanguage: PropTypes.string
};
