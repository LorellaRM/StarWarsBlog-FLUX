import React from "react";
import PropTypes from "prop-types";

export const SpecieCard = props => {
	return (
		<div className="card">
			<img src="#" className="card-img-top" alt="Star Wars image" />
			<div className="card-body">
				<h5 className="card-title">{props.specieName}</h5>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">{props.specieClassification}</li>
					<li className="list-group-item">{props.specieLanguage}</li>
					<li className="list-group-item">{props.specieHomeworld}</li>
				</ul>
			</div>
			{/* <div className="card-body">
				<link href="#" className="btn btn-primary">
					Go somewhere
				</link>
				<link href="#" className="btn btn-primary">
					Fav
				</link>
			</div> */}
		</div>
	);
};

SpecieCard.propTypes = {
	specieName: PropTypes.string,
	specieClassification: PropTypes.string,
	specieHomeworld: PropTypes.string,
	specieLanguage: PropTypes.string
};
