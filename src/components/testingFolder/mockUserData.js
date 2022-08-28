//////////////////////////////////////////////////////
//// * User Data
//////////////////////////////////////////////////////

/*
{
  id: `${foodItem}-${categoryItem}-${purchaseDateItem}-${expiryDateItem}-${Math.random()}`,
  item: foodItem,
  quantity: quantityItem,
  category: categoryItem,
  purchaseDate: purchaseDateItem,
  expiryDate: expiryDateItem,
};
*/

const mockUserData = {
  username: "",
  password: "",
  evergreen: [
    {
      id: "214564658425",
      item: "fish",
      quantity: " 3 fillet",
      category: "fish",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-09-05",
    },
    {
      id: "2365467845",
      item: "apple pie",
      quantity: "1 pie ",
      category: "pastry",
      purchaseDate: "2022-06-26",
      expiryDate: "2022-12-31",
    },
    {
      id: "23135496213",
      item: "raw beef",
      quantity: "3 flanks",
      category: "raw meat",
      purchaseDate: "2022-07-12",
      expiryDate: "2022-11-12",
    },
    {
      id: "21354651232141",
      item: "snapper",
      quantity: "6 fillet",
      category: "fish",
      purchaseDate: "2022-08-13",
      expiryDate: "2022-09-05",
    },
    {
      id: "5466544844654",
      item: "salmon",
      quantity: "6 baked portions",
      category: "fish",
      purchaseDate: "2022-01-13",
      expiryDate: "2022-10-05",
    },
  ],
  rotten: [
    {
      id: "123213546",
      item: "steamed eggs",
      quantity: "12 eggs",
      category: "eggs",
      purchaseDate: "2021-08-26",
      expiryDate: "2022-06-12",
    },
  ],
  trashed: [
    {
      id: "123654662",
      item: "banana",
      quantity: "1 bunch",
      category: "fruit",
      purchaseDate: "2022-08-26",
      expiryDate: "2022-01-05",
    },
    {
      id: "2621354645",
      item: "mushroom soup",
      quantity: "2 bowls",
      category: "soup",
      purchaseDate: "2021-08-23",
      expiryDate: "2022-02-05",
    },
  ],
};

export default mockUserData;
