import React from "react";
import PropsTypes from "prop-types";

export const CharacterCard = props => {
	return (
		<div className="card">
			<img src="#" className="card-img-top" alt="#" />
			<div className="card-body">
				<h5 className="card-title">Name: {props.characterName}</h5>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Height: {props.characterHeight}</li>
					<li className="list-group-item">Hair color: {props.characterHairColor}</li>
					<li className="list-group-item">Skin color: {props.characterSkinColor}</li>
					<li className="list-group-item">Birth year: {props.characterBirthYear}</li>
				</ul>
			</div>
			<div className="card-body">
				<link href="#" className="btn btn-primary" />
				<link href="#" className="btn btn-primary" />
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	characterName: PropsTypes.string,
	characterHeight: PropsTypes.string,
	characterHairColor: PropsTypes.string,
	characterSkinColor: PropsTypes.string,
	characterEyeColor: PropsTypes.string,
	characterBirthYear: PropsTypes.string
};
