alert("Добро пожаловать в банковскую программу!");

var initialAmount = +prompt("Введите сумму, которую вы хотели бы вложить");
var percent = +prompt("Введите желаемую процентную ставку");
var years = 5;

for(var i = 1; i <= years; i++)
{
	var deposit = initialAmount;
	deposit = deposit * (100 + percent) / 100;
	
	if (i == 1)
	{
		document.write("Ваш вклад через " + i + " год<br>");
		document.write("Начальная сумма: " + initialAmount.toFixed(2) + 
					   "<br>Вы накопите за год: " + deposit.toFixed(2) +
					   "<br>Доход по вкладу: " + (deposit - initialAmount).toFixed(2) +
					   "<br>Ставка: " + percent + "%<br><br>");
	}
	else if (i > 1 && i < 5)
	{
		document.write("Ваш вклад через " + i + " года<br>");
		document.write("Начальная сумма: " + initialAmount.toFixed(2) + 
					   "<br>Вы накопите за год: " + deposit.toFixed(2) +
					   "<br>Доход по вкладу: " + (deposit - initialAmount).toFixed(2) +
					   "<br>Ставка: " + percent + "%<br><br>");
	}
	else if (i > 4)
	{
		document.write("Ваш вклад через " + i + " лет<br>");
		document.write("Начальная сумма: " + initialAmount.toFixed(2) + 
					   "<br>Вы накопите за год: " + deposit.toFixed(2) +
					   "<br>Доход по вкладу: " + (deposit - initialAmount).toFixed(2) +
					   "<br>Ставка: " + percent + "%<br><br>");
	}
	
	initialAmount = deposit;
}