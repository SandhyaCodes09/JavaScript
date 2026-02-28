const shoppingCart = ["Pencils", "Erasers", "Pens", "Notepad"];

// Add Ballpoint Pens
shoppingCart[2] = "Ballpoint Pens";
// Add Stapler
shoppingCart[4] = "Stapler";
// Add Typewriter
shoppingCart[5] = "Typewriter";

// Remove Typewriter and store it in itemRemove

const itemRemoved = shoppingCart.pop();

 console.log("Shopping Cart");
 console.table(shoppingCart);
 console.log("Item Removed: ", itemRemoved);
