type Menu = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  food: Menu; //nesting object types
  status: "ordered" | "completed"; //literal and union
};

const menu: Menu[] = [
  { id: 1, name: "Salad", price: 150 },
  { id: 2, name: "Pizza", price: 450 },
  { id: 3, name: "Burger", price: 250 },
  { id: 4, name: "Lasagna", price: 700 },
  { id: 5, name: "Cheesecake", price: 600 },
];

let cashInRegister = 1000;
let nextOrderId = 1;
const orderQueue: Order[] = [];

function addNewFood(foodObj: Menu) {
  menu.push(foodObj);
}

//Type Narrowing used in getFoodDetail function which allows to define the type of the parameter based on its value
//This is useful when you want to handle different types of inputs in a single function.
//In this case, the function can accept either a string (food name) or a number (food id) to retrieve food details.

function getFoodDetail(foodIdentifier: string | number) {
  if (typeof foodIdentifier === "string") {
    return menu.find(
      (food) => food.name.toLowerCase() === foodIdentifier.toLowerCase()
    );
  } else {
    return menu.find((food) => food.id === foodIdentifier);
  }
}

function placeOrder(foodName: string) {
  const selectedFood = menu.find(
    (food) => food.name.toLowerCase() === foodName.toLowerCase()
  );
  if (!selectedFood) {
    console.error(`${foodName} not found in menu`);
    return;
  }
  cashInRegister += selectedFood.price;
  const newOrder: Order = {
    id: nextOrderId++,
    food: selectedFood,
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
addNewFood({ id: 6, name: "Chicken Wings", price: 450 });
addNewFood({ id: 7, name: "Biryani", price: 400 });

placeOrder("Chicken Wings");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in Register:", cashInRegister);
console.log("Order Queue:", orderQueue);
