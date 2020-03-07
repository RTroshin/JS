//var numbers = [42, 56, 96, 14, 28];

/*
var numbers = [];
numbers.push(42); // 42
numbers.push(18); // 42, 18
numbers.push(64); // 42, 18, 64
numbers.pop(); // 42, 18
var m = numbers.pop(); // m = 18
*/

var numbers = [];

for (var i = 0; i < 5; i++)
{
	var randomNumber = parseInt(Math.random() * 100); // parseInt отбрасывает дробную часть у сгенерированного числа (Math.random генерирует в диапазоне от 0 до 0,999...)
	numbers.push(randomNumber);
}

alert("Запомните числа и их порядок: " + numbers);

var userAnswer = +prompt("Каким было первое число?");
alert(numbers[0]); // 42
if (userAnswer == numbers[0])
	alert("Всё верно!");
else
	alert("А вот и нет! Правильный ответ был " + numbers[0]);

userAnswer = +prompt("А каким было последнее?");
alert(numbers.length); // 5
alert(numbers[numbers.length - 1]); // Это тоже самое, что и numbers[4]
if (userAnswer == numbers[numbers.length - 1])
	alert("Всё верно!");
else
	alert("А вот и нет! Правильный ответ был " + numbers[numbers.length - 1]);

var n = parseInt(Math.random() * numbers.length);
userAnswer = +prompt("А как насчёт числа под номером " + (n + 1) +  "?");	

if (userAnswer == numbers[n])
	alert("Всё верно!");
else
	alert("А вот и нет! Правильный ответ был " + numbers[n]);