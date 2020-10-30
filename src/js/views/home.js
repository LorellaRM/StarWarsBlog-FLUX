import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { CardVehicle } from "../component/CardV";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<CardVehicle />
			<button onClick={() => console.log(store.vehicles[0].model)}>PRESS HERE</button>
		</div>
	);
};
