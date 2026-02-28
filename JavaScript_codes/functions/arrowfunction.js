// Shopping cart items with their prices
const cart = [
    { item: "Laptop", price: 999 },
    { item: "Headphones", price: 99 },
    { item: "Mouse", price: 29 },
];

// Arrow function to calculate total price
const calculateTotal = (items) => {
    let total = 0;

    for (let item of items) {
        total += item.price;
    }

    return total;
};

// Arrow function to log item details
const log = (item, price) => 
    console.log(`${item}: INR ${price}`);

// Arrow function to print cart items
const printCartItems = (items) => {
    for (let item of items) {
        log(item.item, item.price);
    }
};

 printCartItems(cart);
 console.log("Total: INR " + calculateTotal(cart));
