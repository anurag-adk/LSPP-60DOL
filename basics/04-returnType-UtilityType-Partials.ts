import type { userRole } from "./03-literalAndUnion.ts";

type User = {
  id: number;
  username: string;
  role: userRole; //from 03-literalAndUnion.ts
};

//PARTIALS
type updatedUser = Partial<User>;

const users: User[] = [
  { id: 1, username: "harry", role: "admin" },
  { id: 2, username: "ron", role: "buyer" },
  { id: 3, username: "hermione", role: "seller" },
];

//FUNCTION RETURN TYPE
//Syntax is, function_name(argument: type): returnType
function getUserDetails(username: string): User | undefined {
  const user = users.find((user) => user.username === username);
  if (!user) {
    console.error(`User ${username} not found`);
    return;
  }
  return user;
}

//UTILITY TYPE
function updateUser(id: number, changes: updatedUser) {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.error(`User with id ${id} not found`);
    return;
  }
  Object.assign(foundUser, changes);
}

updateUser(3, { role: "admin" });
console.log(getUserDetails("hermione"));
