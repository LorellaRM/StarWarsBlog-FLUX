import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters.jsx";

export const Home = () => {
	const [store, actions] = useState(Context);

	return (
		<div className="text-center mt-5">
			<Characters />
		</div>
	);
};
