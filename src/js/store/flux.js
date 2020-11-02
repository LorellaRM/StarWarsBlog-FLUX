const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starWarsCharactersDescription: []
		},
		actions: {
			getStarWarsPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(response => {
						return response.json();
					})
					.then(jsonApiResponse => {
						console.log("JSON Response: ", jsonApiResponse.results);
						setStore({ starWarsCharactersDescription: jsonApiResponse.results });
						console.log("characterDescriptions: ", getStore().starWarsCharactersDescription);
					})
					.catch(error => {
						console.error("Error", error);
					});
			},

			setPerson: person => {
				let formatedCharacters = [];
				person.map((character, index) => {
					formatedCharacters.push({
						name: character.name,
						height: character.height,
						hair_color: character.hair_color,
						skin_color: character.skin_color,
						eye_color: character.eye_color,
						birth_year: character.birth_year
					});
				});
				setStore({ person: formatedCharacters });
			}
		}
	};
};

export default getState;
