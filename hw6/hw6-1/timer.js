/*Создать функцию `timer`.
Функция `timer` должна возвращать новый промис.
Функция `timer` принимает 1 аргумент - количество миллисекунд,
через которые промис должен перейти в состояние `fulfilled`.
*/

function timer(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let timeSec = time / 1000;

      let endingSec = timeSec % 10 == 1 &&
        timeSec % 100 != 11 ? 0 : timeSec % 10 >= 2 &&
        timeSec % 10 <= 4 &&
        (timeSec % 100 < 10 || timeSec % 100 >= 20) ? "секунды" : "секунд";

      let result = `Я вывелась через ${timeSec} ${endingSec}`

      resolve(result);
    }, time);
  });
}

timer(5000).then((result) => console.log(result));
