const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  const result = login.length >= 4 && login.length <= 16;
  return result;
};
const isLoginUnique = function (logins, login) {
  const result = !logins.includes(login);
  return result;
};
const addLogin = function (logins, login) {
  if (isLoginValid(login) === false) {
    return 'Помилка! Логін повинен бути від 4 до 16 символів';
  }
  if (isLoginUnique(logins, login) === false) {
    return 'Такий логін уже використовується!';
  }
  logins.push(login);
  return 'Логін успішно доданий!';
};

console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'Ajax'));
