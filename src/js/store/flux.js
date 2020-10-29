const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			person: []
		},
		actions: {
			getPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(response => {
						if (!response.ok) {
							throw new Error("Error");
						}
						return response.json();
					})
					.then(jsonPeople => {
						getActions().setPerson(jsonPeople.results);
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
