function getRandomNumber(max)
{
	return Math.round(Math.random() * max);
}

function max(a, b)
{
	if (a >= b)
		return a;
	else
		return b;
	alert("Никогда не выполнится");
}

function factorial(n)
{
	var result = 1;
	for (var i = 1; i <= n ; i++)
		// result = result * i;
		result *= i;
	return result;
}

// Факториал 5: 1 * 2 * 3 * 4 * 5 = 120

// 5! = 1 * 2 * 3 * 4 * 5
// 4! = 1 * 2 * 3 * 4
// 3! = 1 * 2 * 3
// 2! = 1 * 2
// 1! = 1
// 0! = 1

// 5! = 4! * 5
// 4! = 3! * 4
// 3! = 2! * 3
// 2! = 1! * 2
// 1! = 0! * 1
// 0! = 1

function recursiveFactorial(n)
{
	if (n == 0)
		return 1;
	else
		return recursiveFactorial(n - 1) * n;
}

var rf = recursiveFactorial(4);

document.write("Факториал 4! = " + rf);

var f = factorial(5);
var a = max(34, 68);
var c = max(a, 98) + 4;
var n = getRandomNumber(100);
var m = getRandomNumber(4);

// alert(f);