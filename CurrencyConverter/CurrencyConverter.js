alert("Программа конвертирования валют");

var EUR = 68.33; // Курс евро по состоянию на 20.01.2020 (источник: Yandex.ru)
var USD = 61.54; // Курс доллара по состоянию на 20.01.2020 (источник: Yandex.ru)

alert("Курс иностранных валют по отношению к рублю\n1 EUR = " + EUR + " RUB\n" + "1 USD = " + USD + " RUB");

var RUB = prompt("Введите сумму (в рублях) для конвертирования в евро и доллар");

EUR = parseFloat(EUR); // parseFloat вместо parseInt, т.к. используются значения вещественного типа
USD = parseFloat(USD);
RUB = parseFloat(RUB);

var convertEUR = RUB / EUR;
var convertUSD = RUB / USD;

alert("Конвертирование суммы ₽" + RUB + " завершено\nРезультат:\nEUR: " + "€" + convertEUR.toFixed(2) + "\nUSD: " + "$" + convertUSD.toFixed(2)); // .toFixed(2) - вывод значения с точностью до 2-х знаков после запятой