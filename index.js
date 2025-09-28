// ---------------------
// Завдання 1: Promise.all
// ---------------------

// Функція, яка створює проміс із затримкою
function delayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

// Масив із 5 промісів з різними значеннями та затримками
const promises = [
  delayedPromise("Проміс 1", 1000),
  delayedPromise("Проміс 2", 3000),
  delayedPromise("Проміс 3", 2000),
  delayedPromise("Проміс 4", 4000),
  delayedPromise("Проміс 5", 1500),
];

// Виконання всіх промісів одночасно
Promise.all(promises)
  .then((results) => {
    console.log("✅ Завдання 1: Усі проміси виконано:");
    console.log(results);
  })
  .catch((error) => {
    console.error("❌ Помилка у Завданні 1:", error);
  });

// ---------------------
// Завдання 2: Promise.race
// ---------------------

// Функція, яка створює проміс з випадковою затримкою
function randomDelay(value) {
  const delay = Math.floor(Math.random() * 4000) + 1000; // від 1000 до 5000 мс
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${value} (затримка: ${delay} мс)`);
    }, delay);
  });
}

// Масив із 5 промісів з різними значеннями
const racePromises = [
  randomDelay("Проміс A"),
  randomDelay("Проміс B"),
  randomDelay("Проміс C"),
  randomDelay("Проміс D"),
  randomDelay("Проміс E"),
];

// Виконання всіх промісів, але беремо найшвидший
Promise.race(racePromises)
  .then((result) => {
    console.log("🚀 Завдання 2: Найшвидший проміс виконався:");
    console.log(result);
  })
  .catch((error) => {
    console.error("❌ Помилка у Завданні 2:", error);
  });
