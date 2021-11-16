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
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
