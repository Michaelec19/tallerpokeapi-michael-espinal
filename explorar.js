const buscarPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        console.log("Status de la respuesta:", response.status);
        const datos = await response.json();

        for (let t = 0; t < datos.types.length; t++) {
                console.log(`el Pokemon ${pokemon} es de tipo:`);
                console.log(datos.types[t].type.name);
            };

        console.log(`Sus estadisticas base son:`);

        for (let s = 0; s < datos.stats.length; s++) {
            
            console.log(datos.stats[s].stat.name);
            console.log(datos.stats[s].base_stat);
            }

        console.log(`Sus habilidades principales son:`);

        for (let a = 0; a < datos.abilities.length; a++) {
                console.log(datos.abilities[a].ability.name);
            }
    } catch (error) {
        console.log("Ingresa un Pokemon válido");
    }
};

buscarPokemon("miltank");