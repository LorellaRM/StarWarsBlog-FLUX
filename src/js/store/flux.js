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
						getActions().setSpecies(jsonSpecies.results);
					})
					.catch();
			},

			setSpecies: species => {
				species.map(specie => {
					getStore().species.push({
						name: specie.name,
						classification: specie.classification,
						homeworld: specie.homeworld,
						language: specie.language,
						average_height: specie.average_height,
						average_lifespan: specie.average_lifespan,
						people: specie.people,
						url: specie.url
					});
				});
			}
		}
	};
};

export default getState;
