const logItems = function (items) {
  for (let i = 0; i < items.length; i += 1) {
    let j = i;
    j += 1;
    console.log(`[${j}] - [${items[i]}]`);
  }
};

const words = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const nambers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

logItems(words);

logItems(nambers);
