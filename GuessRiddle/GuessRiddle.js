alert("Добро пожаловать в игру \"Отгадай загадку!\"");
alert("Правила игры:\nЯ загадываю загадку и вам даётся 3 попытки для того, чтобы отгадать её.\nОтветом для каждой загадки является ОДНО слово, написанное русскими буквами (например \"Выхухоль\") или число.");

var stop = 0;
var win = 0;
var lose = 0;
while(stop == 0)
{
	var stop1 = 0;
	var maxTryCount = 3;
	var answer = prompt("Первая загадка!\nЧто зимой и летом одним цветом?");
	
	for(var tryCount = 1; tryCount < maxTryCount + 1; tryCount++)
	{
		if (answer == "Ёлка" || answer == "ёлка" || answer == "Елка" || answer == "елка")
		{
			win++;
			alert("Поздравляю! Вы отгадали верно!");
			alert("Игра окончена!");
			break;
		}
		else if (tryCount == maxTryCount)
		{
			lose++;
			alert("Увы! Вы проиграли!");
			alert("Не расстраиваетесь! В следующий раз повезёт!");
			break;
		}
		else
		{
			if (tryCount == 1)
				alert("Ахаха! " +  answer + "? Вы серьёзно?");		
			if (maxTryCount - tryCount == 1)
				answer = prompt("Упс! Неверно!\nПопробуйте ещё раз.\nУ вас осталось " + (maxTryCount - tryCount) + " попытка"); // 1 попыткА
			else
				answer = prompt("Упс! Неверно!\nПопробуйте ещё раз.\nУ вас осталось " + (maxTryCount - tryCount) + " попытки");	// 2 попыткИ
		}
	}
	alert("Правильный ответ: ёлка");
	
	answer = prompt("Это было слишком просто для вас?\nХотите я загадаю ещё 3 загадки? Да/Нет");
	if (answer == "Нет" || answer == "нет")
	{
		answer = prompt("Данное предложение действует только для Вас в течении дня!\nУверены? Да/Нет");
		if (answer == "Да" || answer == "да")
		{
			alert("Как жаль!\nСпасибо за игру!");
		}
		else
			stop = 0;
	}
	else
	{
		answer = prompt("Вторая загадка!\nНе отыскать её корней,\nВерхушка выше тополей.\nВсё круче вверх она идёт -\nА не растёт.");
	
		for(var tryCount = 1; tryCount < maxTryCount + 1; tryCount++)
		{
			if (answer == "Гора" || answer == "гора")
			{
				win++;
				alert("Поздравляю! Вы отгадали верно!");
				break;
			}
			else if (tryCount == maxTryCount)
			{
				lose++;
				alert("Увы! Вы проиграли!");
				alert("Не расстраиваетесь! В следующий раз повезёт!");
				break;
			}
			else
			{
				if (tryCount == 1)
					alert(answer + "? Тоже неплохой ответ");	
				if (maxTryCount - tryCount == 1)
					answer = prompt("Упс! Неверно!\nПопробуйте ещё раз.\nУ вас осталось " + (maxTryCount - tryCount) + " попытка"); // 1 попыткА
				else
					answer = prompt("Упс! Неверно!\nПопробуйте ещё раз.\nУ вас осталось " + (maxTryCount - tryCount) + " попытки");	// 2 попыткИ
			}
		}
		alert("Правильный ответ: гора");

		alert("Следующая загадка!");
		answer = prompt("Третья загадка!\nТридцать белых коней\nНа двух красных холмах -\nРазбегутся, сшибутся\nИ снова затихнут впотьмах.");
		
		for(var tryCount = 1; tryCount < maxTryCount + 1; tryCount++)
		{
			if (answer == "Зубы" || answer == "зубы")
			{
				win++;
				alert("Поздравляю! Вы отгадали верно!");
				break;
			}
			else if (tryCount == maxTryCount)
			{
				lose++;
				alert("Увы! Вы проиграли!");
				alert("Не расстраиваетесь! В следующий раз повезёт!");
				break;
			}
			else
			{
				if (tryCount == 1)
					alert(answer + "? А вы с фантазией!");	
				if (maxTryCount - tryCount == 1)
					answer = prompt("Упс! Неверно!\nПопробуйте ещё раз.\nУ вас осталось " + (maxTryCount - tryCount) + " попытка"); // 1 попыткА
				else
					answer = prompt("Упс! Неверно!\nПопробуйте ещё раз.\nУ вас осталось " + (maxTryCount - tryCount) + " попытки");	// 2 попыткИ
			}
		}
		alert("Правильный ответ: зубы");
		
		alert("И последняя!");
		answer = prompt("Четвёртая загадка!\nБез голоса кричит,\nБез крыльев - а летает,\nИ безо рта свистит\nИ без зубов кусает.");
		
		for(var tryCount = 1; tryCount < maxTryCount + 1; tryCount++)
		{
			if (answer == "Ветер" || answer == "ветер")
			{
				win++;
				alert("Поздравляю! Вы отгадали верно!");
				break;
			}
			else if (tryCount == maxTryCount)
			{
				lose++;
				alert("Увы! Вы проиграли!");
				alert("Не расстраиваетесь! В следующий раз повезёт!");
				break;
			}
			else
			{
				if (tryCount == 1)
					alert("Подсказка: он может дуть сильнее всех живых существ!");	
				if (maxTryCount - tryCount == 1)
					answer = prompt("Упс! Неверно!\nПопробуйте ещё раз.\nУ вас осталось " + (maxTryCount - tryCount) + " попытка"); // 1 попыткА
				else
					answer = prompt("Упс! Неверно!\nПопробуйте ещё раз.\nУ вас осталось " + (maxTryCount - tryCount) + " попытки");	// 2 попыткИ
			}
		}
		alert("Правильный ответ: ветер");	
		alert("А вот и ваша статистика подъехала!\nПобед - " + win + "\nПоражений - " + lose);

		answer = prompt("Эй! Пссс! Хотите ещё 3 загадки? Да/Нет");
		if (answer == "Нет" || answer == "нет")
		{
			alert("Ах как жаль!\nА мне показалось, что мы с вами весело проводили время!");
			alert("Спасибо за игру!");
		}
		else
		{
			answer = prompt("Пятая загадка!\nБез замка, без крышки\nСделан сундучком,\nА внутри хранится\nЗолота кусок.");
		
			for(var tryCount = 1; tryCount < maxTryCount + 1; tryCount++)
			{
				if (answer == "Яйца" || answer == "яйца" || answer == "Яйцо" || answer == "яйцо")
				{
					win++;
					alert("Поздравляю! Вы отгадали верно!");
					break;
				}
				else if (tryCount == maxTryCount)
				{
					lose++;
					alert("Увы! Вы проиграли!");
					alert("Не расстраиваетесь! В следующий раз повезёт!");
					break;
				}
				else
				{
					if (tryCount == 1)
						alert("Подсказка: такой сундучок обычно белого цвета, но бывает и бурым");	
					if (maxTryCount - tryCount == 1)
						answer = prompt("Упс! Неверно!\nПопробуйте ещё раз.\nУ вас осталось " + (maxTryCount - tryCount) + " попытка"); // 1 попыткА
					else
						answer = prompt("Упс! Неверно!\nПопробуйте ещё раз.\nУ вас осталось " + (maxTryCount - tryCount) + " попытки");	// 2 попыткИ
				}
			}
			alert("Правильный ответ: яйца");

			alert("Следующая загадка!");
			answer = prompt("Шестая загадка! Моя лучшая!\nПожирает всё кругом\nЗверя, птицу, лес и дом.\nСталь сгрызёт, железо сгложет,\nКрепкий камень уничтожит\nВласть его всего сильней,\nДаже власти королей.");
				
			for(var tryCount = 1; tryCount < maxTryCount + 1; tryCount++)
			{
				if (answer == "Время" || answer == "время")
				{
					win++;
					alert("Поздравляю! Вы отгадали верно!");
					break;
				}
				else if (tryCount == maxTryCount)
				{
					lose++;
					alert("Увы! Вы проиграли!");
					alert("Не расстраиваетесь! В следующий раз повезёт!");
					break;
				}
				else
				{
					if (tryCount == 2)
						alert("Подсказка: посмотрите на свои часы, что вы видите?");	
					if (maxTryCount - tryCount == 1)
						answer = prompt("Упс! Неверно!\nПопробуйте ещё раз.\nУ вас осталось " + (maxTryCount - tryCount) + " попытка"); // 1 попыткА
					else
						answer = prompt("Упс! Неверно!\nПопробуйте ещё раз.\nУ вас осталось " + (maxTryCount - tryCount) + " попытки");	// 2 попыткИ
				}
			}
			alert("Правильный ответ: время");
				
			alert("И последняя!");
			answer = prompt("Ну раз вы отгадали предыдущую, то эту раскусите без труда!\nСедьмая загадка!\nЧто лежит у меня в кармане?");
			
			for(var tryCount = 1; tryCount < maxTryCount + 1; tryCount++)
			{
				if (answer == "Прелесть" || answer == "прелесть")
				{
					win++;
					alert("Поздравляю! Вы отгадали верно!");
					break;
				}
				else if (tryCount == maxTryCount)
				{
					lose++;
					alert("Увы! Вы проиграли!");
					alert("Не расстраиваетесь! В следующий раз повезёт!");
					break;
				}
				else
				{
					if (answer == "Кольцо" || answer == "кольцо")
						alert("Хах! Как бы не так!");
					if (tryCount == 2)
						alert("Гугл здесь не поможет!");	
					if (maxTryCount - tryCount == 1)
						answer = prompt("Упс! Неверно!\nПопробуйте ещё раз.\nУ вас осталось " + (maxTryCount - tryCount) + " попытка"); // 1 попыткА
					else
						answer = prompt("Упс! Неверно!\nПопробуйте ещё раз.\nУ вас осталось " + (maxTryCount - tryCount) + " попытки");	// 2 попыткИ
				}
			}
			alert("Правильный ответ: прелесть");			
			alert("А вот и ваша статистика подъехала!\nПобед - " + win + "\nПоражений - " + lose);	
			alert("К сожалению, у меня закончились загадки...");
		}
	}		
	while(stop1 == 0)
	{
		var exitChoice = prompt("Хотите выйти?\nДа/Нет");
		if (exitChoice == "Нет" || exitChoice == "нет")
		{
			stop1 = 1;
			alert("Ура! Тогда давайте начнём заново!");
		}
		else if	(exitChoice == "Да" || exitChoice == "да")
		{
			exitChoice = prompt("Вы действительно хотите выйти? Да/Нет");
			if (exitChoice == "Нет" || exitChoice == "нет")
			{
				stop1 = 1;
				alert("Ура! Тогда давайте начнём заново!");
			}
			else if (exitChoice == "Да" || exitChoice == "да")
			{
				alert("Чтобы выйти, вам придется отгадать ещё одну загадку! МуаХахаа!");
				var finger = parseInt(Math.random() * 10 + 1);
				var tryCountExit = 1;
				while(answer != finger)
				{
					answer = +prompt("Сколько пальцев я показываю?\nПодсказка: от 1 до 10");
					if (answer == finger && tryCountExit == 1)
					{
						alert("Так нечестно! Вы подсматривали! Давайте ещё раз!");
						finger = parseInt(Math.random() * 10 + 1);
						continue;
					}
					if (answer == finger && tryCountExit != 1)
					{
						stop1 = 1;
						stop = 1;
						alert("Угадали! Спасибо за игру!\nДо свидания!");
						break;
					}
					if (tryCountExit == 11)
					{
						alert("Ну уж нет! Придётся отгадывать");
						continue;
					}
					alert("А вот и нет! Попробуйте ещё раз");
					tryCountExit++;
				}
			}
		}
	}
}