import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { CardVehicle } from "../component/CardV";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="container-fluid">
				{store.vehicles.map((vehicle, index) => {
					var text = "model: " + vehicle.model;
					return (
						<CardVehicle key={index} title={vehicle.name} text={text} button1="More Info" linkButton1="" />
					);
				})}
			</div>
			<ul>
				{store.people.map((person, index) => {
					return <li key={index}> {person.name}</li>;
				})}
			</ul>
			<button onClick={() => console.log(store.vehicles[1].model)}>PRESS HERE</button>
		</div>
	);
};
