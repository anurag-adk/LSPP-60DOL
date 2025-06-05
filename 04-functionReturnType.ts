type User = {
  username: string;
  role: userRole; //from 03-literalAndUnion.ts
};

const users: User[] = [
  { username: "harry", role: "admin" },
  { username: "ron", role: "buyer" },
  { username: "hermione", role: "seller" },
];

function getUserDetails(username: string): User | undefined {
  const user = users.find((user) => user.username === username);
  if (!user) {
    console.error(`User ${username} not found`);
    return;
  }
  return user;
}
