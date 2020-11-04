import React, { useState, useEffect } from "react";

const getState = ({ getStore, getActions, setStore, getState }) => {
	return {
		store: {
			vehicles: [],
			people: [],
			favorites: []
		},
		actions: {
			getvehicles: () => {
				fetch("https://swapi.dev/api/vehicles/")
					.then(response => {
						if (!response.ok) {
							throw new Error("Sorry, this vehicle has been stolen");
						}
						return response.json();
					})
					.then(vehiclesJSON => {
						console.log(vehiclesJSON.results);
						setStore({ vehicles: vehiclesJSON.results });
						// getActions().setVehicles(vehiclesJSON.results);
					})
					.catch();
			},
			setFavorites: eachFavorite => {
				setStore({ favorites: [...getStore().favorites, eachFavorite] });
			},

			getpeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(response => {
						if (!response.ok) {
							throw new Error("Sorry, I did't find it");
						}
						return response.json();
					})
					.then(peopleJSON => {
						console.log(peopleJSON.results);
						setStore({ people: peopleJSON.results });
						// getActions().setVehicles(vehiclesJSON.results);
					})
					.catch();
			}

			// setVehicles: cars => {
			// 	setStore({ vehicles: cars });
			// cars.map((vehicles, index) => {
			// 	getStore().vehicles.push({
			// 		model: vehicles.model,
			// 		name: vehicles.name,
			// 		passengers: vehicles.passengers,
			// 		cost_in_credits: vehicles.cost_in_credits
			// 	});
			// 	console.log(getStore().vehicles);
			// });
			// }
		}
	};
};

export default getState;
