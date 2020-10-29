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
						height: character.height
					});
				});
				setStore({ person: formatedCharacters });
			}
		}
	};
};

export default getState;
