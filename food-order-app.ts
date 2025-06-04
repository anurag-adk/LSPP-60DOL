type Menu = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  item: Menu; //nesting object types
  status: "ordered" | "completed";
};

const menu: Menu[] = [
  { name: "Salad", price: 150 },
  { name: "Pizza", price: 450 },
  { name: "Burger", price: 250 },
  { name: "Lasagna", price: 700 },
  { name: "Cheesecake", price: 600 },
];

let cashInRegister = 1000;
let nextOrderId = 1;
const orderQueue: Order[] = [];

function addNewItem(itemObj: Menu) {
  menu.push(itemObj);
}

function placeOrder(itemName: string) {
  const selectedItem = menu.find((item) => item.name === itemName);
  if (!selectedItem) {
    console.error(`${itemName} not found in menu`);
    return;
  }
  cashInRegister += selectedItem.price;
  const newOrder: Order = {
    id: nextOrderId++,
    item: selectedItem,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} not found in order queue`);
    return;
  }
  order.status = "completed";
  return order;
}

//Test
addNewItem({ name: "Chicken Wings", price: 450 });
addNewItem({ name: "Biryani", price: 400 });

placeOrder("Chicken Wings");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in Register:", cashInRegister);
console.log("Order Queue:", orderQueue);
