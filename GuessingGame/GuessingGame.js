var answer = parseInt(Math.random() * 100);
var userAnswer = +prompt("Угадайте число от 0 до 100");
var maxTryCount = 7;

for(var tryCount = 1; tryCount < maxTryCount; tryCount++)
{
	if (userAnswer == answer)
	{
		alert("Поздравляю, вы угадали! ");
		break;
	}
	else if (userAnswer > answer)
		alert("Вы ввели слишком большое число!");
	else if (userAnswer < answer)
		alert("Вы ввели слишком маленькое число!");
	
	userAnswer = +prompt("Попробуйте ещё раз. Угадайте число от 1 до 100\nУ вас осталось " + (maxTryCount - tryCount) + " попыток\n");
}

if (tryCount == maxTryCount)
	alert("Вы проиграли!");

alert("Правильный ответ: " + answer);