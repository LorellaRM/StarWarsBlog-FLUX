import React, { useState } from "react";
import { Context } from "../store/appContext.js";
import { SpecieCard } from "./specieCard.jsx";

export const Species = props => (
	<Context.Consumer>
		{({ store, actions }) => {
			console.log(store.species);
			store.species.map((specie, index) => {
				return (
					<div key={index}>
						<SpecieCard
							specieName={specie.name}
							specieClassification={specie.classification}
							specieHomeworld={specie.homeworld}
							pecieLanguage={specie.language}
						/>
					</div>
				);
			});
		}}
	</Context.Consumer>
);
