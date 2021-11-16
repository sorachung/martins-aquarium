const database = {
  fish: [
    {
      id: 1,
      name: "Guppers",
      image: "/images/guppy.jpg",
      species: "Guppy",
      size: 5,
      location: "Alaska",
      food: "ramen"
    },
    {
      id: 2,
      name: "Goldy",
      image: "/images/goldfish.jpg",
      species: "goldfish",
      size: 3,
      location: "near here",
      food: "food"
    },
    {
      id: 3,
      name: "Porg",
      image: "/images/Scup-porgy.jpg",
      species: "Scup/Porgy",
      size: 9,
      location: "near mom's house",
      food: "popcorn"
    },
    {
      id:4,
      name: "Bet",
      image: "/images/siamese-fighting-fish-betta.jpg",
      species: "Siamese fighting fish/Betta",
      size: 3,
      location: "near here",
      food: "food"
    }
  ],

  tips: [
    {
      id: 1,
      title: "Tank Cleanliness:",
      body: "the process of keeping the tank clean"
    },
    {
      id: 2,
      title: "Water Salinity:",
      body: "the process of keeping the water at the right salinity"
    },
    {
      id: 3,
      title: "Water Temperature:",
      body: "the process of keeping the water at the right temperature"
    }
    
  ],

  locations: [
    {
      id: 1,
      name: "The Lake of Tomorrow",
      dateVisited: 2011,
      location: "near here",
      blurb: "It was cool"
    },
    {
      id: 2,
      name: "The Lake of Tomorrow",
      dateVisited: 2011,
      location: "over here",
      blurb: "It was cool"
    },
    {
      id: 3,
      name: "The Lake of Tomorrow",
      dateVisited: 2011,
      location: "Alaska",
      blurb: "It was cool"
    },
    {
      id: 4,
      name: "The Lake of Tomorrow",
      dateVisited: 2011,
      location: "near mom's house",
      blurb: "It was cool"
    }
  ],

  quotes: [
    {
      id: 1,
      text: "this is a quote",
      source: "Me"
    },
    {
      id: 2,
      text: "this is a quote",
      source: "Me"
    },
    {
      id: 3,
      text: "this is a quote",
      source: "Me"
    },
    {
      id: 4,
      text: "this is a quote",
      source: "Me"
    }
  ]
  };

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};

export const getTips = () => {
  return database.tips.map((tips) => ({ ...tips }));
};

export const getLocations = () => {
  return database.locations.map((locations) => ({ ...locations }));
};

export const getQuotes = () => {
  return database.quotes.map((quotes) => ({ ...quotes }));
};