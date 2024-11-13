const pokemonStarters = [
  // Generation 1
  {
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    stage: "1",
    generation: "1",
    altText: "Bulbasaur, the Seed Pokémon",
    image: "./bulb.jpg", // Add image URL here
  },
  {
    name: "Ivysaur",
    types: ["Grass", "Poison"],
    stage: '2',
    generation: '1',
    altText: "Ivysaur, the Seed Pokémon",
    image: "./ivy.jpg", // Add image URL here
  },
  {
    name: "Venusaur",
    types: ["Grass", "Poison"],
    stage: '3',
    generation: '1',
    altText: "Venusaur, the Flower Pokémon",
    image: "./ven.jpg", // Add image URL here
  },
  {
    name: "Charmander",
    types: ["Fire"],
    stage: '1',
    generation: '1',
    altText: "Charmander, the Lizard Pokémon",
    image: "./charmander.jpg", // Add image URL here
  },
  {
    name: "Charmeleon",
    types: ["Fire"],
    stage: '2',
    generation: '1',
    altText: "Charmeleon, the Flame Pokémon",
    image: "./charmeleon.jpg", // Add image URL here
  },
  {
    name: "Charizard",
    types: ["Fire", "Flying"],
    stage: '3',
    generation: '1',
    altText: "Charizard, the Flame Pokémon",
    image: "./zard.jpg", // Add image URL here
  },
  {
    name: "Squirtle",
    types: ["Water"],
    stage: '1',
    generation: '1',
    altText: "Squirtle, the Tiny Turtle Pokémon",
    image: "./squirtle.jpg", // Add image URL here
  },
  {
    name: "Wartortle",
    types: ["Water"],
    stage: '2',
    generation: '1',
    altText: "Wartortle, the Turtle Pokémon",
    image: "./wartortle.jpg", // Add image URL here
  },
  {
    name: "Blastoise",
    types: ["Water"],
    stage: '3',
    generation: '1',
    altText: "Blastoise, the Shellfish Pokémon",
    image: "./blast.jpg", // Add image URL here
  },

  // Generation 2
  {
    name: "Chikorita",
    types: ["Grass"],
    stage: '1',
    generation: '2',
    altText: "Chikorita, the Leaf Pokémon",
    image: "./chik.jpg", // Add image URL here
  },
  {
    name: "Bayleef",
    types: ["Grass"],
    stage: '2',
    generation: '2',
    altText: "Bayleef, the Herb Pokémon",
    image: "./bayleef.jpg", // Add image URL here
  },
  {
    name: "Meganium",
    types: ["Grass"],
    stage: '3',
    generation: '2',
    altText: "Meganium, the Herb Pokémon",
    image: "./meganium.jpg", // Add image URL here
  },
  {
    name: "Cyndaquil",
    types: ["Fire"],
    stage: '1',
    generation: '2',
    altText: "Cyndaquil, the Tiny Fire Mouse Pokémon",
    image: "./cyndiquil.jpg", // Add image URL here
  },
  {
    name: "Quilava",
    types: ["Fire"],
    stage: '2',
    generation: '2',
    altText: "Quilava, the Volcano Pokémon",
    image: "./quail.jpg", // Add image URL here
  },
  {
    name: "Typhlosion",
    types: ["Fire"],
    stage: '3',
    generation: '2',
    altText: "Typhlosion, the Volcano Pokémon",
    image: "./typhlosion.jpg", // Add image URL here
  },
  {
    name: "Totodile",
    types: ["Water"],
    stage: '1',
    generation: '2',
    altText: "Totodile, the Big Jaw Pokémon",
    image: "./tot.jpg", // Add image URL here
  },
  {
    name: "Croconaw",
    types: ["Water"],
    stage: '2',
    generation: '2',
    altText: "Croconaw, the Big Jaw Pokémon",
    image: "./croconaw.jpg", // Add image URL here
  },
  {
    name: "Feraligatr",
    types: ["Water"],
    stage: '3',
    generation: '2',
    altText: "Feraligatr, the Big Jaw Pokémon",
    image: "./feraligator.jpg", // Add image URL here
  },

  // Generation 3
  {
    name: "Treecko",
    types: ["Grass"],
    stage: '1',
    generation: '3',
    altText: "Treecko, the Gecko Pokémon",
    image: "./treeko.jpg", // Add image URL here
  },
  {
    name: "Grovyle",
    types: ["Grass"],
    stage: '2',
    generation: '3',
    altText: "Grovyle, the Gecko Pokémon",
    image: "./grovyle.jpg", // Add image URL here
  },
  {
    name: "Sceptile",
    types: ["Grass"],
    stage: '3',
    generation: '3',
    altText: "Sceptile, the Forest Pokémon",
    image: "./sceptile.jpg", // Add image URL here
  },
  {
    name: "Torchic",
    types: ["Fire"],
    stage: '1',
    generation: '3',
    altText: "Torchic, the Chick Pokémon",
    image: "./torchic.jpg", // Add image URL here
  },
  {
    name: "Combusken",
    types: ["Fire", "Fighting"],
    stage: '2',
    generation: '3',
    altText: "Combusken, the Young Fowl Pokémon",
    image: "./combustkin.jpg", // Add image URL here
  },
  {
    name: "Blaziken",
    types: ["Fire", "Fighting"],
    stage: '3',
    generation: '3',
    altText: "Blaziken, the Blaze Pokémon",
    image: "./blaziken.jpg", // Add image URL here
  },
  {
    name: "Mudkip",
    types: ["Water"],
    stage: '1',
    generation: '3',
    altText: "Mudkip, the Mud Fish Pokémon",
    image: "./mudkip.jpg", // Add image URL here
  },
  {
    name: "Marshtomp",
    types: ["Water", "Ground"],
    stage: '2',
    generation: '3',
    altText: "Marshtomp, the Mud Fish Pokémon",
    image: "./marshtomp.jpg", // Add image URL here
  },
  {
    name: "Swampert",
    types: ["Water", "Ground"],
    stage: '3',
    generation: '3',
    altText: "Swampert, the Mud Fish Pokémon",
    image: "./swampert.jpg", // Add image URL here
  },

  // Generation 4
//   {
//     name: "Turtwig",
//     types: ["Grass"],
//     stage: '1',
//     generation: 4,
//     altText: "Turtwig, the Tiny Leaf Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Grotle",
//     types: ["Grass"],
//     stage: 2,
//     generation: 4,
//     altText: "Grotle, the Grove Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Torterra",
//     types: ["Grass", "Ground"],
//     stage: 3,
//     generation: 4,
//     altText: "Torterra, the Continent Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Chimchar",
//     types: ["Fire"],
//     stage: 1,
//     generation: 4,
//     altText: "Chimchar, the Chimp Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Monferno",
//     types: ["Fire", "Fighting"],
//     stage: 2,
//     generation: 4,
//     altText: "Monferno, the Flame Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Infernape",
//     types: ["Fire", "Fighting"],
//     stage: 3,
//     generation: 4,
//     altText: "Infernape, the Flame Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Piplup",
//     types: ["Water"],
//     stage: 1,
//     generation: 4,
//     altText: "Piplup, the Penguin Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Prinplup",
//     types: ["Water"],
//     stage: 2,
//     generation: 4,
//     altText: "Prinplup, the Penguin Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Empoleon",
//     types: ["Water", "Steel"],
//     stage: 3,
//     generation: 4,
//     altText: "Empoleon, the Emperor Pokémon",
//     image: "", // Add image URL here
//   },

//   // Generation 5
//   {
//     name: "Snivy",
//     types: ["Grass"],
//     stage: 1,
//     generation: 5,
//     altText: "Snivy, the Grass Snake Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Servine",
//     types: ["Grass"],
//     stage: 2,
//     generation: 5,
//     altText: "Servine, the Grass Snake Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Serperior",
//     types: ["Grass"],
//     stage: 3,
//     generation: 5,
//     altText: "Serperior, the Regal Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Tepig",
//     types: ["Fire"],
//     stage: 1,
//     generation: 5,
//     altText: "Tepig, the Pig Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Pignite",
//     types: ["Fire", "Fighting"],
//     stage: 2,
//     generation: 5,
//     altText: "Pignite, the Fire Pig Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Emboar",
//     types: ["Fire", "Fighting"],
//     stage: 3,
//     generation: 5,
//     altText: "Emboar, the Mega Fire Pig Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Oshawott",
//     types: ["Water"],
//     stage: 1,
//     generation: 5,
//     altText: "Oshawott, the Sea Otter Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Dewott",
//     types: ["Water"],
//     stage: 2,
//     generation: 5,
//     altText: "Dewott, the Sea Otter Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Samurott",
//     types: ["Water"],
//     stage: 3,
//     generation: 5,
//     altText: "Samurott, the Sea Otter Pokémon",
//     image: "", // Add image URL here
//   },

//   // Generation 6
//   {
//     name: "Chespin",
//     types: ["Grass"],
//     stage: 1,
//     generation: 6,
//     altText: "Chespin, the Chestnut Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Quilladin",
//     types: ["Grass"],
//     stage: 2,
//     generation: 6,
//     altText: "Quilladin, the Chestnut Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Chesnaught",
//     types: ["Grass", "Fighting"],
//     stage: 3,
//     generation: 6,
//     altText: "Chesnaught, the Chestnut Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Fennekin",
//     types: ["Fire"],
//     stage: 1,
//     generation: 6,
//     altText: "Fennekin, the Fox Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Braixen",
//     types: ["Fire"],
//     stage: 2,
//     generation: 6,
//     altText: "Braixen, the Fox Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Delphox",
//     types: ["Fire", "Psychic"],
//     stage: 3,
//     generation: 6,
//     altText: "Delphox, the Fox Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Froakie",
//     types: ["Water"],
//     stage: 1,
//     generation: 6,
//     altText: "Froakie, the Bubble Frog Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Frogadier",
//     types: ["Water"],
//     stage: 2,
//     generation: 6,
//     altText: "Frogadier, the Bubble Frog Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Greninja",
//     types: ["Water", "Dark"],
//     stage: 3,
//     generation: 6,
//     altText: "Greninja, the Ninja Pokémon",
//     image: "", // Add image URL here
//   },

//   // Generation 7
//   {
//     name: "Rowlet",
//     types: ["Grass", "Flying"],
//     stage: 1,
//     generation: 7,
//     altText: "Rowlet, the Grass Quill Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Dartrix",
//     types: ["Grass", "Flying"],
//     stage: 2,
//     generation: 7,
//     altText: "Dartrix, the Blade Quill Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Decidueye",
//     types: ["Grass", "Ghost"],
//     stage: 3,
//     generation: 7,
//     altText: "Decidueye, the Grass Quill Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Litten",
//     types: ["Fire"],
//     stage: 1,
//     generation: 7,
//     altText: "Litten, the Fire Cat Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Torracat",
//     types: ["Fire"],
//     stage: 2,
//     generation: 7,
//     altText: "Torracat, the Fire Cat Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Incineroar",
//     types: ["Fire", "Dark"],
//     stage: 3,
//     generation: 7,
//     altText: "Incineroar, the Flame Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Popplio",
//     types: ["Water"],
//     stage: 1,
//     generation: 7,
//     altText: "Popplio, the Sea Lion Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Brionne",
//     types: ["Water"],
//     stage: 2,
//     generation: 7,
//     altText: "Brionne, the Sea Lion Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Primarina",
//     types: ["Water", "Fairy"],
//     stage: 3,
//     generation: 7,
//     altText: "Primarina, the Soloist Pokémon",
//     image: "", // Add image URL here
//   },

//   // Generation 8
//   {
//     name: "Grookey",
//     types: ["Grass"],
//     stage: 1,
//     generation: 8,
//     altText: "Grookey, the Chimp Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Thwackey",
//     types: ["Grass"],
//     stage: 2,
//     generation: 8,
//     altText: "Thwackey, the Drum Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Rillaboom",
//     types: ["Grass"],
//     stage: 3,
//     generation: 8,
//     altText: "Rillaboom, the Grass Gorilla Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Scorbunny",
//     types: ["Fire"],
//     stage: 1,
//     generation: 8,
//     altText: "Scorbunny, the Rabbit Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Raboot",
//     types: ["Fire"],
//     stage: 2,
//     generation: 8,
//     altText: "Raboot, the Rabbit Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Cinderace",
//     types: ["Fire"],
//     stage: 3,
//     generation: 8,
//     altText: "Cinderace, the Striker Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Sobble",
//     types: ["Water"],
//     stage: 1,
//     generation: 8,
//     altText: "Sobble, the Water Lizard Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Drizzile",
//     types: ["Water"],
//     stage: 2,
//     generation: 8,
//     altText: "Drizzile, the Water Lizard Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Inteleon",
//     types: ["Water"],
//     stage: 3,
//     generation: 8,
//     altText: "Inteleon, the Secret Agent Pokémon",
//     image: "", // Add image URL here
//   },
//   // Generation 9
//   {
//     name: "Sprigatito",
//     types: ["Grass"],
//     stage: 1,
//     generation: 9,
//     altText: "Grookey, the Chimp Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Floragato",
//     types: ["Grass"],
//     stage: 2,
//     generation: 9,
//     altText: "Thwackey, the Drum Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Meowscarada",
//     types: ["Grass"],
//     stage: 3,
//     generation: 9,
//     altText: "Rillaboom, the Grass Gorilla Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Fuecoco",
//     types: ["Fire"],
//     stage: 1,
//     generation: 9,
//     altText: "Scorbunny, the Rabbit Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Crocalor",
//     types: ["Fire"],
//     stage: 2,
//     generation: 9,
//     altText: "Raboot, the Rabbit Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Skeledirge",
//     types: ["Fire"],
//     stage: 3,
//     generation: 9,
//     altText: "Cinderace, the Striker Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Quaxly",
//     types: ["Water"],
//     stage: 1,
//     generation: 9,
//     altText: "Sobble, the Water Lizard Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Quaxwell",
//     types: ["Water"],
//     stage: 2,
//     generation: 9,
//     altText: "Drizzile, the Water Lizard Pokémon",
//     image: "", // Add image URL here
//   },
//   {
//     name: "Quaquaval",
//     types: ["Water"],
//     stage: 3,
//     generation: 9,
//     altText: "Inteleon, the Secret Agent Pokémon",
//     image: "", // Add image URL here
//   },
];
export { pokemonStarters };
