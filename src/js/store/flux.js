const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			species: []
		},
		actions: {
			getSpecies: () => {
				fetch("https://swapi.dev/api/species/")
					.then(response => {
						if (!response.ok) {
							throw new Error("I can't load Species!");
						}
						return response.json();
					})
					.then(jsonSpecies => {
						setStore({ species: jsonSpecies.results });
					})
					.catch();
			}
		}
	};
};

export default getState;
