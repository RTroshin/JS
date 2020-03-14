/*
var english = ["food", "bike", "apple", "do" , "mean"];
var russian = ["еда", "велосипед", "яблоко", "делать", "иметь в виду"];
*/

var words = [
	["food", "еда"],
	["bike", "велосипед"],
	["apple", "яблоко"],
	["do", "делать"],
	["mean", "иметь в виду"]
];

while (words.length != 0)
{
	var i = parseInt(Math.random() * words.length);
	var userTranslate = prompt("Как переводится слово: " + words[i][0]);
	if (userTranslate == words[i][1])
	{
		alert("Это правильный ответ!");
		words.splice(i , 1);
	}
	else
		alert("Правильный ответ: " + words[i][1]);
}

alert("Поздравляю, вы запомнили все слова!");

/*
alert(words[0]); // "food", "еда"
alert(words[1]); // "bike", "велосипед"
alert(words[0][0]); // "food"
alert(words[0][1]); // "еда"
alert(words[0][3]); // udefined
*/

var hardWords = [
	["chainsaw", "бензопила"],
	["squirrel", "белка"],
	["castle", "замок"],
	["homeland", "родина"],
	["sewerage", "канализация"],
	["bottom", "дно"]
];

while (hardWords.length != 0)
{
	var i = parseInt(Math.random() * hardWords.length);
	var userTranslate = prompt("Как переводится слово: " + hardWords[i][0]);
	if (userTranslate == hardWords[i][1])
	{
		alert("Это правильный ответ!");
		hardWords.splice(i , 1);
	}
	else
		alert("Правильный ответ: " + hardWords[i][1]);
}

alert("Поздравляю, вы запомнили все слова!");