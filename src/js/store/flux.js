const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			species: [],
			favorites: []
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
			},
			setFavorites: eachFavorite => {
				// if(getStore().favorites != getStore().favorites)
				setStore({ favorites: [...getStore().favorites, eachFavorite] });
			}
		}
	};
};

export default getState;
