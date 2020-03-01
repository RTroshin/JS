//var n = +prompt("Пожалуйста, введите число");

/*
if (isNaN(n))
{
	document.write("Нужно было ввести число");
}
else if (n < 0)
{
	document.write("Нужно было ввести положительное число");		
}
else
{
	var sum = 0;
	for(var i = 0; i <= n; i++)
	{
		sum += i; // sum = sum + i;
		// document.write(i + " " + sum + "<br>");
	}
	document.write(sum);
}
*/

/*
if (isNaN(n) || n < 0)
{
	document.write("Нужно было ввести положительное число");		
}
else
{
	var sum = 0;
	for(var i = 0; i <= n; i++)
	{
		sum += i; // sum = sum + i;
		// document.write(i + " " + sum + "<br>");
	}
	document.write(sum);
}
*/

/*
while(isNaN(n) || n < 0)
{
	n = +prompt("Пожалуйста, введите положительное число");		
}

var sum = 0;
for(var i = 0; i <= n; i++)
{
	sum += i; // sum = sum + i;
	// document.write(i + " " + sum + "<br>");
}
document.write(sum);
*/

do
{
	var n = +prompt("Пожалуйста, введите положительное число");		
}
while(isNaN(n) || n < 0)

var sum = 0;
for(var i = 0; i <= n; i++)
{
	sum += i; // sum = sum + i;
	// document.write(i + " " + sum + "<br>");
}
document.write(sum);