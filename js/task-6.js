const numbers = [];
let total = 0;
let message;
do {
  let input = prompt('Введіть число');
  if (input === null) {
    break;
  }
  input = Number(input);
  if (Number.isNaN(input)) {
    alert('Було написано не число, спробуйте ще раз');
    continue;
  }
  numbers.push(input);
} while (true);

// for (let i = 0; i < numbers.length; i += 1) {
//   total += numbers[i];
// }
for (let number of numbers) {
  total += number;
}

// console.log(numbers);
// console.log(total);
alert(`Загальна сума чисел дорівнює ${total}`);
