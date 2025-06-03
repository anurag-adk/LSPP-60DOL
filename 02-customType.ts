type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  hobbies: string[];
  address?: Address; // adding ? makes this property optional
};

let person1: Person = {
  name: "Alice",
  age: 21,
  isStudent: true,
  hobbies: ["reading", "hiking", "coding"],
  address: {
    street: "Street no. 8",
    city: "Pokhara",
    country: "Nepal",
  },
};

let person2: Person = {
  name: "Bob",
  age: 30,
  isStudent: false,
  hobbies: ["gaming", "cooking"],
  // address is optional
};
