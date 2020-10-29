import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<button onClick={() => console.log(store.vehicles)}>PRESS HERE</button>
		</div>
	);
};
