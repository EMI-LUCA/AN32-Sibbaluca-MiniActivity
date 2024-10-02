
// 1. store details: assigning names to the const variables:
const storeName = "Tech2Go";
const storeLocation = "San pedro Laguna";
const storeCapacity = 230;


// 2. Dynamic Product Inventory: creating the variables for the products
let products = [
    { name: "Laptop", price: 18999, quantity: 50 },
    { name: "Smartphone", price: 9999, quantity: 100 },
    { name: "Tablet", price: 12999, quantity: 80 }
];


// 3. providing the calculations for the total inventory value
let totalInventoryValue = 0;
let totalNumberOfProducts = 0;

for (let product of products) {
    totalInventoryValue += product.price * product.quantity;
    totalNumberOfProducts += product.quantity;
}

// 4. adding the product information
for (let product of products) {
    if (product.name === "Laptop") {
        product.quantity += 10;
        break;
    }
}


// 5. locating the most expensive product
let mostExpensiveProduct = products[0];
for (let product of products) {
    if (product.price > mostExpensiveProduct.price) {
        mostExpensiveProduct = product;
    }
}

// 6. adding a new product with its price and quantity to the inventory
let newProduct = { name: "Smartwatch", price: 6969, quantity: 69 };
products.push(newProduct);


// 7. recalculating the total inventory value with a new product
totalInventoryValue = 0;
totalNumberOfProducts = 0;

for (let product of products) {
    totalInventoryValue += product.price * product.quantity;
    totalNumberOfProducts += product.quantity;
}

console.log("Store Name:", storeName);
console.log("Store Location:", storeLocation);
console.log("Total Number of Products:", totalNumberOfProducts);
console.log("Total Inventory Value:", totalInventoryValue);
console.log("Updated Laptop Quantity:", products.find(p => p.name === "Laptop").quantity);
console.log("Most Expensive Product:", mostExpensiveProduct.name);
