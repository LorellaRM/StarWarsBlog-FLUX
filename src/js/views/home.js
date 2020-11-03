import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { CardVehicle } from "../component/CardV";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div>
				{store.vehicles.map((vehicle, index) => {
					return (
						<CardVehicle
							key={index}
							title={vehicle.name}
							model={"Model: " + vehicle.model}
							manufacturer={"Manufacturer: " + vehicle.manufacturer}
							cost={"Cost: " + vehicle.cost_in_credits}
							passengers={"Passengers: " + vehicle.passengers}
							button1="More Info"
							linkButton1={"https://www.starwars.com/search?q=" + vehicle.name.replace(" ", "+")}
						/>
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
