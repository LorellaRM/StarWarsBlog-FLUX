const getState = ({ getStore, getActions, setStore, getState }) => {
	return {
		store: {
            vehicles: [],
            
		},
		actions: {
            getvehicles: () => {
                fetch("https://swapi.dev/api/vehicles").then(
                    response => {
                        if (!response.ok) {
                            throw new Error("Sorry, this vehicle has been stolen")
                        }
                        return response.json();
                    }

                ).then(vehiclesJSON => {
                    setVehicles(vehiclesJSON);
                }).catch()
            },

            setVehicles: vehicles => {
                vehicles.map((vehicles, index) => {
                    store.vehicles.push({
                        "model": vehicles.model,
                        "name": vehicles.name,
                        "passengers": vehicles.passengers,
                        "cost_in_credits": vehicles.cost_in_credits
                    });
                }
                );
            }
			/* Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
}

export default getState;
