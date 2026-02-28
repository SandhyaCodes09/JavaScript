// reduce() -> Reduces array to single value(Method that return single value)

const myShoppingCart = [
  {
    id: 1,
    name: "HB Pencil Set (12 pcs)",
    price: 85,
    quantity: 2,
  },
  {
    id: 2,
    name: "Notebook (200 pages)",
    price: 120,
    quantity: 3,
  },
  {
    id: 3,
    name: "Blue Ballpoint Pen",
    price: 25,
    quantity: 5,
  },
  {
    id: 4,
    name: "Geometry Box",
    price: 180,
    quantity: 1,
  },
  {
    id: 5,
    name: "Eraser",
    price: 15,
    quantity: 4,
  },
  {
    id: 6,
    name: "A4 Sheet Pack (100 sheets)",
    price: 250,
    quantity: 1,
  },
  {
    id: 7,
    name: "Highlighter Set (4 colors)",
    price: 95,
    quantity: 1,
  },
];

// Use reduce() to calculate the total price of the shopping cart

const totalPrice = myShoppingCart.reduce(

  (acc, item) => acc + item.price * item.quantity,

  0

);

const totalItems = myShoppingCart.reduce((acc, item) => acc + item.quantity, 0);

// Use reduce() to calculate the total number of items in the shopping cart

try {
  console.log("Total price: INR", totalPrice);
  console.log("Total items:", totalItems);
} catch {
  console.error("Please read the instructions carefully and try again");
}
