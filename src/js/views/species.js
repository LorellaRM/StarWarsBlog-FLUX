import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const SpeciesView = props => {
	const { store, actions } = useContext(Context);
	console.log(useParams());
	const cards = (
		<div>
			<h1>{store.species.name}</h1>
			<h2>{store.species.classification}</h2>
			<h2>{store.species.language}</h2>
		</div>
	);
	return cards;
};
