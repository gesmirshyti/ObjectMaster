const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    const pokémonDivisibleBy3 = pokémon.filter(pokemon => pokemon.id % 3 === 0);
    console.log(pokémonDivisibleBy3);

    const fireTypePokémon = pokémon.filter(pokemon => pokemon.types.includes("fire"));
    console.log(fireTypePokémon);

    const multiTypePokémon = pokémon.filter(pokemon => pokemon.types.length > 1);
    console.log(multiTypePokémon);

    const pokémonNames = pokémon.map(pokemon => pokemon.name);
    console.log(pokémonNames);

    const pokémonNamesWithIdGreaterThan99 = pokémon
    .filter(pokemon => pokemon.id > 99)
    .map(pokemon => pokemon.name);
    console.log(pokémonNamesWithIdGreaterThan99);   


    const pokémonNamesWithOnlyPoison = pokémon
    .filter(pokemon => pokemon.types.length === 1 && pokemon.types.includes("poison"))
    .map(pokemon => pokemon.name);
    console.log(pokémonNamesWithOnlyPoison);

    const firstTypeWithSecondTypeFlying = pokémon
    .filter(pokemon => pokemon.types.length === 2 && pokemon.types[1] === "flying")
    .map(pokemon => pokemon.types[0]);
    console.log(firstTypeWithSecondTypeFlying);

    const normalTypeCount = pokémon.filter(pokemon => pokemon.types.includes("normal")).length;

    console.log(normalTypeCount);
