import React, { useState, useEffect } from "react";

const getState = ({ getStore, getActions, setStore, getState }) => {
	return {
		store: {
			vehicles: []
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
						getActions().setVehicles(vehiclesJSON.results);
					})
					.catch();
			},

			setVehicles: cars => {
				cars.map((vehicles, index) => {
					getStore().vehicles.push({
						model: vehicles.model,
						name: vehicles.name,
						passengers: vehicles.passengers,
						cost_in_credits: vehicles.cost_in_credits
					});
					console.log(getStore().vehicles);
				});
			}
		}
	};
};

export default getState;
