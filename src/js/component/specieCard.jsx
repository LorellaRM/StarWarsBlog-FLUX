import React from "react";
import PropTypes from "prop-types";

export const SpecieCard = props => {
	return (
		<div className="card">
			<img
				src="https://sm.ign.com/ign_es/screenshot/default/image_n95t.jpg"
				className="card-img-top"
				alt="Star Wars some species"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.specieName}</h5>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Classification: {props.specieClassification}</li>
					<li className="list-group-item">Language: {props.specieLanguage}</li>
				</ul>
			</div>
			{/* <div className="card-body">
				<link to="/species/" className="btn btn-primary">
					Go somewhere
				</link>
                <button>
                    Fav
                </button>
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
