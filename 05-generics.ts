const studentMarks = [83, 78, 92, 85, 90];
const favouriteSpells = [
  "Expelliarmus",
  "Stupefy",
  "Wingardium Leviosa",
  "Lumos",
  "Accio",
];
const studentDetails = [
  { name: "Harry", age: 20 },
  { name: "Ron", age: 21 },
  { name: "Hermione", age: 19 },
  { name: "Draco", age: 22 },
  { name: "Ginny", age: 20 },
];

function getLastElement<placeholderType>(
  array: placeholderType[]
): placeholderType | undefined {
  return array[array.length - 1];
}

console.log(getLastElement(studentMarks));
console.log(getLastElement(favouriteSpells));
console.log(getLastElement(studentDetails));
