//////////////////////////////////////////////////////
//// * User Data
//////////////////////////////////////////////////////

const mockUserData = {
  evergreen: [
    {
      item: "fish",
      quanity: 3,
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fish",
    },
    {
      item: "apple",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit",
    },
    {
      item: "beef",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "raw meat",
    },
    {
      item: "cupcake",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "pastry",
    },
    {
      item: "banana",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit",
    },
    {
      item: "chocolate bar",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "snack",
    },
    {
      item: "cinnamon bun",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "pastry",
    },
    {
      item: "cucumber",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "vegetables",
    },
    {
      item: "eggs",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "raw egg",
    },
    {
      item: "orange juice",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit juice",
    },
  ],
  rotten: [
    {
      item: "watermelon",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit",
    },
    {
      item: "mango",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit",
    },
    {
      item: "mutton",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "raw meat",
    },
    {
      item: "macaron",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "pastry",
    },
    {
      item: "blueberry",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit",
    },
    {
      item: "chocolate bar",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "snack",
    },
    {
      item: "cinnamon bun",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "pastry",
    },
    {
      item: "cucumber",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "vegetables",
    },
    {
      item: "eggs",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "raw egg",
    },
    {
      item: "orange juice",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit juice",
    },
  ],
  trashed: [
    {
      item: "salmon",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fish",
    },
    {
      item: "blueberry",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit",
    },
    {
      item: "chicken",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "raw meat",
    },
    {
      item: "molten lava cake",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "pastry",
    },
    {
      item: "banana",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit",
    },
    {
      item: "chocolate bar",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "snack",
    },
    {
      item: "cinnamon bun",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "pastry",
    },
    {
      item: "cucumber",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "vegetables",
    },
    {
      item: "eggs",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "raw egg",
    },
    {
      item: "orange juice",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit juice",
    },
  ],
};

export default mockUserData;

///// updated date

const defaultDataState = {
  user: "owner",
  evergreen: [
    {
      id: "2022-08-26-2022-09-05",
      item: "fish",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fish",
    },
    {
      id: "2022-08-26-2022-09-05",
      item: "apple",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit",
    },
    {
      id: "2022-08-26-2022-09-05",
      item: "beef",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "raw meat",
    },
  ],
  rotten: [
    {
      id: "2022-08-26-2022-09-05",
      item: "watermelon",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit",
    },
    {
      id: "2022-08-26-2022-09-05",
      item: "mango",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit",
    },
    {
      id: "2022-08-26-2022-09-05",
      item: "mutton",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "raw meat",
    },
    {
      id: "2022-08-26-2022-09-05",
      item: "macaron",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "pastry",
    },
    {
      id: "2022-08-26-2022-09-05",
      item: "blueberry",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit",
    },
  ],
  trashed: [
    {
      id: "2022-08-26-2022-09-05",
      item: "salmon",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fish",
    },
    {
      id: "2022-08-26-2022-09-05",
      item: "blueberry",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit",
    },
    {
      id: "2022-08-26-2022-09-05",
      item: "chicken",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "raw meat",
    },
    {
      id: "2022-08-26-2022-09-05",
      item: "molten lava cake",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "pastry",
    },
    {
      id: "2022-08-26-2022-09-05",
      item: "banana",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "fruit",
    },
    {
      id: "2022-08-26-2022-09-05",
      item: "chocolate bar",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
      category: "snack",
    },
  ],
};
