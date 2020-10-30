import React, { useState } from "react";
import { Context } from "../store/appContext.js";
import { SpecieCard } from "./specieCard.jsx";

export const Species = props => {
	const [store, actions] = useState(Context);
	return (
		<div>
			<SpecieCard />
		</div>
	);
};
