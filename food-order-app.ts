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

let cashInRegister = 1000;
let nextOrderId = 1;
let nextFoodId = 1;

const menu: Menu[] = [
  { id: nextFoodId++, name: "Salad", price: 150 },
  { id: nextFoodId++, name: "Pizza", price: 450 },
  { id: nextFoodId++, name: "Burger", price: 250 },
  { id: nextFoodId++, name: "Lasagna", price: 700 },
  { id: nextFoodId++, name: "Cheesecake", price: 600 },
];

const orderQueue: Order[] = [];

function addNewFood(foodObj: Menu): void {
  menu.push(foodObj);
}

//Type Narrowing used in getFoodDetail function which allows to define the type of the parameter based on its value
//This is useful when you want to handle different types of inputs in a single function.
//In this case, the function can accept either a string (food name) or a number (food id) to retrieve food details.

//Instead of using else we should use else if  for better code practice, since sometimes we may import functions from TS to another file. TS has type safety to prevent errors but other file may not have it which will throw undefined error.

function getFoodDetail(foodIdentifier: string | number): Menu | undefined {
  if (typeof foodIdentifier === "string") {
    return menu.find(
      (food) => food.name.toLowerCase() === foodIdentifier.toLowerCase()
    );
  } else if (typeof foodIdentifier === "number") {
    return menu.find((food) => food.id === foodIdentifier);
  }
}

function placeOrder(foodName: string): Order | undefined {
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

function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} not found in order queue`);
    return;
  }
  order.status = "completed";
  return order;
}

//Test
addNewFood({ id: nextFoodId++, name: "Chicken Wings", price: 450 });
addNewFood({ id: nextFoodId++, name: "Biryani", price: 400 });

console.log(getFoodDetail(2)); //get food by Id

placeOrder("Chicken Wings");
completeOrder(1);

console.log("Menu:", menu);
// console.log("Cash in Register:", cashInRegister);
// console.log("Order Queue:", orderQueue);
