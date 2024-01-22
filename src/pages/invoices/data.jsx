// const rows = [
//   { id: 1, col0: "Omar", coll2: 2 },
//   { id: 2, col0: "Mohammed", coll2: 20 },
//   { id: 3, col0: "Tarek", coll2: 20 },
// ];

export const rows = [];
const acc = ["Admin", "Manager", "User"];
const names = ["Omar", "Ayman", "Tarek", "Ahmed", "Mohammed"];
const ages = ["20", "30", "40", "23", "22"];

for (let index = 1; index < 50; index++) {
  const row = {
    id: index,
    name: names[Math.ceil(Math.random() * names.length) - 1],
    email: "o@gmail.com",
    age: ages[Math.ceil(Math.random() * ages.length) - 1],
    phone: "0102488788",
    access: acc[Math.ceil(Math.random() * acc.length) - 1],
  };
  rows.push(row);
}
