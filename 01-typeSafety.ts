const menu = [
  { name: "Salad", price: 150 },
  { name: "Pizza", price: 450 },
  { name: "Burger", price: 250 },
  { name: "Lasagna", price: 700 },
  { name: "Cheesecake", price: 600 },
];

let cashInRegister = 1000;
let nextOrderId = 1;
const orderQueue = [];

function addNewItem(itemObj) {
  menu.push(itemObj);
}

function placeOrder(itemName) {
  const selectedItem = menu.find((item) => item.name === itemName);
  cashInRegister += selectedItem.price;
  const newOrder = { id: nextOrderId++, item: selectedItem, status: "ordered" };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId) {
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
}

addNewItem({ name: "Chicken Wings", price: 450 });
addNewItem({ name: "Biryani", price: 400 });

placeOrder("Chicken Wings");
completeOrder("1");

console.log("Menu:", menu);
console.log("Cash in Register:", cashInRegister);
console.log("Order Queue:", orderQueue);
