import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { SpecieCard } from "./specieCard.jsx";

export const Species = props => {
	const { store, actions } = useContext(Context);
	const cards = store.species.map((specie, index) => (
		<SpecieCard
			key={index}
			specieName={specie.name}
			specieClassification={specie.classification}
			specieLanguage={specie.language}
		/>
	));
	return cards;
};
