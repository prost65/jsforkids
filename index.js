//185
// синтаксис добавления метода к свойству prorotype, который будет доступен всем объектам конструктора
Car.prototype.draw = function () {};

// 180
// конструкторы
let car = new Car(100, 200);

//179
let pig = {
  sound: "Хрю",
  name: "Чили",
  speak: speak,
};
let horse = {
  sound: "И-го-го",
  name: "Мэрри",
  speak: speak,
};
pig.speak();
horse.speak();

//178
// Метод с разными объектами
let speak = function () {
  console.log(this.sound + " ! Меня зовут " + this.name + "!");
};
let cat1 = {
  sound: "Мяу",
  name: "Варежка",
  speak: speak,
};
cat1.speak();

//177
// Методы
dog.bark = function () {
  console.log("Гав-гав! Меня зовут " + this.name + "!");
};
dog.bark();

//176
// Напоминалка об объектах
let dog1 = {
  name: "Оладушек",
  legs: 4,
  isAwesome: true,
};
dog.name;
dog.age = 6;

//165
//Упражнение - перемещение по щелчку
$("html").click(function (event) {
  $("#heading").offset({
    left: event.pageX,
    top: event.pageY,
  });
});

//163
//Перемещение мышки
$("html").mousemove(function (event) {
  $("#heading").offset({
    left: event.pageX,
    top: event.pageY,
  });
});

//162
//Реакиця на клики (координаты)
let clickHandler = function (event) {
  console.log("Клик! " + event.pageX + " " + event.pageY);
};
$("h1").click(clickHandler);

//160
//Анимация элементов
let leftOffset = 0;
let moveHeading = function () {
  $("#heading").offset({ left: leftOffset });
  leftOffset++;
  if (leftOffset > 200) {
    leftOffset = 0;
  }
};
setInterval(moveHeading, 30);

//159
//Интервалы
let counter = 1;
let printMessage = function () {
  console.log("Ты смотришь в консоль уже " + counter + " сек");
  counter++;
};
let intervalID = setInterval(printMessage, 1000);
clearInterval(intervalID);

//158
//Отмена таймера
let doHomeworkAlarm = function () {
  alert("Эй, пора делать домашку!");
};
let timeoutID = setTimeout(doHomeworkAlarm, 60000);
clearTimeout(timeoutID);

//157
//Таймер
let timeUp = function () {
  alert("Время вышло!");
};
setTimeout(timeUp, 3000);

//155
//Упражнение 4. Метод fadeTo()
$("h1").fadeTo(2000, 0.2);

//155
//Упражнение 3. Отложенная анимация
$("h1").fadeOut(1000).delay(5000).fadeIn(1000);

//155
//Упражнение 2. Мигающий заголовок
$("h1").text("Мои друзья");
// $('h1').fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000)
let n = 1000;
for (let i = 0; i < 5; i++) {
  $("h1").fadeOut(n).fadeIn(n);
  n += 1000;
}

//155
//Упражннеие 1. Перечисление друзей
$("h1").text("Мои друзья");
let myfriends = ["Анна", "Серж"];
for (let i = 0; i < myfriends.length; i++) {
  $("body").append("<p>" + myfriends[i] + "</p>");
}
$("p").append(" лучший!").hide().fadeIn(1000);

//153
//Исчезновение элементов в сторону
$("h1").slideUp(1000).slideDown(1000);

//152
//Затухание и появление
$("h1").fadeOut(3000).fadeIn(2000);

//152
//Применение и затухание, и внесение нового элемента(цепной вызов)
$("h1").text("Этот текст скоро исчезнет").fadeOut(3000);

//152
//Анимацция. Плавное исчезновение
$("h1").fadeOut(3000);

//151
//Добавление нескольких элементов
for (let i = 0; i < 3; i++) {
  let hobby = prompt("Назови одно из свиох хобби");
  $("body").append("<p>" + hobby + "</p>");
}

//150
//Создание новый элементов
$("body").append("<p>Это новый парграф</p>");

//150
//Подключаем jQuery
let newHeadingTextt = prompt("Введите новый заголовок: ");
$("#main-heading").text(newHeadingText);

//147
//Меняем заголовок с помощью js
/* <h1 id="main-heading">Привет, мир!</h1> */
let headingElement = document.getElementById("main-heading");
console.log(headingElement.innerHTML);
let newHeadingText = prompt("Введите новый заголовок: ");
headingElement.innerHTML = newHeadingText;
console.log(headingElement.innerHTML);

//146
//DOM. Поиск элемента с помощью getElementById
/* <h1 id="main-heading">Привет, мир!</h1>; */
let headingElement = document.getElementById("main-heading"); //вызвали бъект и сокранили в переменной
headingElement.innerHTML; //команда, возвращающая сам текст

//140
//Упражнение - совпадают ли массивы
let areArraySame = function (firstArray, secondArray) {
  if (firstArray.length === secondArray.length) {
    for (i = 0; i < secondArray.length; i++) {
      if (firstArray[i] === secondArray[i]) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};
console.log(areArraySame([1, 2, 3], [1, 2, 3]));

//140
//Упражнение - математические расчеты и функции
let add = function (number1, number2) {
  return number1 + number2;
};
let multiply = function (number3, number4) {
  return number3 * number4;
};
console.log(add(multiply(36325, 9824), 777));

//138
//Сокращенная запись функции
//Было
let double2 = function (number) {
  return number * 2;
};
//Стало
function double2(number) {
  return number * 2;
}

//137
//Многократное использование return вместо if...else
let medalForScore = function (score) {
  if (score < 3) {
    return "Бронзовая";
  }
  if (score < 7) {
    return "Серебряная";
  }
  return "Золотая";
};

//137
//Return как ранний выход из функции
let fifthLetter = function (name) {
  if (name.length < 5) {
    return; //если букв меньше, то верни ничего - выйди из функции
  }
  return "Пятая буква вашего имени: " + name[4] + ".";
};
console.log(fifthLetter("Николай"));
console.log(fifthLetter("Ник"));

//135
//Больше усовершенствований
let generateRandomInsult = function () {
  //теперь сам вызов дразнилки - функция
  let randomBodyPart2 = ["глаз", "нос", "череп"];
  let randomAdjectives2 = ["вонючая", "унылая", "дурацкая"];
  let randomWords2 = ["муха", "выдра", "дубина", "мартышка", "крыса"];
  let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
  };
  let randomString2 =
    "У тебя " +
    pickRandomWord(randomBodyPart2) +
    " словно" +
    pickRandomWord(randomAdjectives2) +
    " " +
    pickRandomWord(randomWords2) +
    "!!!";
  return randomString2;
};
console.log(generateRandomInsult());

//134
//Генератор дразнилок, но через функцию
let randomBodyPart2 = ["глаз", "нос", "череп"];
let randomAdjectives2 = ["вонючая", "унылая", "дурацкая"];
let randomWords2 = ["муха", "выдра", "дубина", "мартышка", "крыса"];
//эта функция помогает не писать каждый раз формулу для вызова случайного слова
let pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};
let randomString2 =
  "У тебя " +
  pickRandomWord(randomBodyPart2) +
  " словно" +
  pickRandomWord(randomAdjectives2) +
  " " +
  pickRandomWord(randomWords2) +
  "!!!";
console.log(randomString2);

//132
//Return
let double = function (number) {
  return number * 2;
};
console.log(double(2)); //возвращение результата
console.log(double(3) + double(2)); //зачем собственно нужна функция
console.log(double(double(3)));

//130
//Несколько аргументов в функции
let printMultipleTimes = function (howManyTimes, whatToDraw) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
  }
};
printMultipleTimes(2, " (>_<)"); //1 и 2 аргументы

//129
//Рисуем котиков
var drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + ") =^.^=");
  }
};
drawCats(10); //howManyTimes

//128
//Аргументы функции
let sayHelloTo = function (anyName) {
  console.log("Привет, " + anyName + "!");
};
console.log(sayHelloTo("Ник"));

//127
//Функции
let ourFirstFunction = function () {
  console.log("Привет, мир!");
}; //создается перременная, в которой есть функция (дали только комнаду, так что никакие значение не выводится)
console.log(ourFirstFunction()); //вызвать функцию

//123
//Виселица
let words = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "акула",
  "волшебник",
  "банан",
];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
let timesToPlay = 5;
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;
while (remainingLetters > 0 && timesToPlay > 0) {
  alert(answerArray.join(" "));
  let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
  console.log("\n\n" + timesToPlay + " было попыток");
  console.log(guess);
  guess = guess.toLowerCase();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите только одну букву.");
  } else {
    let check = false;
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess && answerArray[j] === "_") {
        answerArray[j] = guess;
        remainingLetters--;
        timesToPlay;
        check = true;
      }
    }
    if (check == false) {
      timesToPlay--;
    }
  }
  console.log(timesToPlay + " осталось попыток\n\n");
  console.log(remainingLetters + " осталось букв\n\n");
}
if (timesToPlay === 0) {
  alert("Вы проиграли");
} else {
  alert(answerArray.join(" "));
  alert("Отлично! Было загадано слово " + word);
}

//113
//Alert - выдача информации
alert("JavaScript - это круто"); //просто покажет пользователю

//112
//Confirm - да или нет?
let likeCats = confirm("Тебе нравятся кошки?");
if (likeCats) {
  console.log("Ты классная кошка!");
} else {
  console.log("Жаль");
}

//111
//Диалоговое окно
let name = prompt("Как вас зовут?");
console.log("Привет, " + name);

//109
//Упражнение - хакерский язык (h4ck3r sp34k)
let input = "javascript is awesome";
let output = "";
for (let i = 0; i < input.length; i++) {
  if (input[i] === "a") {
    output += "4";
  } else if (input[i] === "e") {
    output += "3";
  } else if (input[i] === "o") {
    output += "0";
  } else if (input[i] === "i") {
    output += "1";
  } else {
    output += input[i];
  }
}
console.log(output);

//А вот так сделала мама
let alphabet1 = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString1 = "";
let i = 0;
while (i < 6) {
  let randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
  randomString += randomChar;
  i++;
}
console.log(randomString);

//108
//Генератор случайный сторк (чет сложно)
var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomLetter = "";
var randomString = "";
var howManyLetters = 0;
while (howManyLetters < 6) {
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  randomString += randomLetter;
  howManyLetters++;
}
console.log(randomString);

//108
//Упражнение - замечательные животные
var animals = ["Кот", "Рыба", "Лемур", "Варан"];
for (let i = 0; i < animals.length; i++) {
  animals[i] = animals[i] + " - прекрасное животное";
}
console.log(animals);

//107
//Упражнение - степени тройки с while
var x = 3;
while (x < 10000) {
  x = x * 3;
  console.log(x);
}

//107
//Упражнение - степени тройки с for
for (var x = 3; x < 10000; x = x * 3) {
  console.log(x);
}

//106
//Степени двойки  до 10 000
for (var x = 2; x < 10000; x = x * 2) {
  console.log(x);
}

//106
//Вывод символов с помощью цикла
var randomname = "Ник";
for (let i = 0; i < name.length; i++) {
  console.log("В моём имени есть буква " + name[i] + ".");
}

//105
//Цикл, который печатает все элементы массива
var animals = ["лев", "фламинго", "белый медведь", "удав"];
for (let i = 0; i < animals.length; i++) {
  console.log("В этом зоопарке есть " + animals[i] + ".");
}

//104
//Действие выполняется несколько раз
var timeToSayHello = 3;
for (let i = 0; i < timeToSayHello; i++) {
  console.log("Привет!");
}

//104
//Считаем овец, но уже на for
for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
  console.log("Посчитано овец: " + sheepCounted + "!");
}
console.log("ХХХХхххррррр-псссссссс");

//102
//Считаем овец с помощью цикла while
var sheepCounted = 0;
while (sheepCounted < 10) {
  console.log("Посчитано овец: " + sheepCounted + "!");
  sheepCounted++;
}
console.log("ХХХХхххррррр-псссссссс");

//101
//Привет мам
var randomname = "Jake";
if (randomname === "Julie") {
  console.log("Привет мам!");
} else if (randomname == "Rory") {
  console.log("Привет пап!");
} else {
  console.log("Привет незнакомец!");
}

//101
//Привет привет
var myname = "Kate";
if (myname === "Kate") {
  console.log("Привет мне!");
} else {
  console.log("Привет незнакомец!");
}

//99
//Ветвление простейшее
var lemonChiken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;
if (lemonChiken) {
  console.log("Отлично, я буду курицу с лимоном!");
} else if (beefWithBlackBean) {
  console.log("Я буду говядину");
} else if (sweetAndSourPork) {
  console.log("Ладно, я закажу свинину");
} else {
  console.log("что ж, остается рис с яйцом");
}

//82
//Упражнение - извлечь число 123
var myCrazyObject = {
  name: "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
  "random animal": "Банановая акула",
};
console.log(myCrazyObject["some array"][2].number);

//82
//Упражнение - подсчет очков
var scores = {};
scores.anna = 3;
scores.jake = 1;
scores.milana = 8;
scores.bet = 0;
console.log(scores);
console.log((scores.anna += 3));

//80
//Хранение фильмов
var movies = {
  findingNemo: {
    releaseDate: 2003,
    duration: 100,
    actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
    format: "DVD",
  },
  starWars: {
    releaseDate: 1983,
    duration: 134,
    actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
    format: "DVD",
  },
  HarryPotter: {
    releaseDate: 2005,
    duration: 157,
    actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"],
    format: "Blu-ray",
  },
};
var cars = {
  releaseDate: 2006,
  duration: 117,
  actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
}; //добавили новую переменную
movies.cars = cars; //довить в объект
console.log(movies); //все 4 фильма

//79
//Учет долгов
var owedMoney = {};
owedMoney["Джимми"] = 5;
owedMoney["Анна"] = 7;
owedMoney["Джимми"] += 3;
console.log(owedMoney["Джимми"]);
console.log(owedMoney);
console.log(owedMoney["Элис"]);

//76
//Массив друзей
var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };
var friends = [anna, dave, kate];
console.log(friends[1]);
console.log(friends[2].name);
console.log(friends[0].luckyNumbers[1]);

//75
//Массивы объектов
var dinosaurs = [
  { name: "Тиранозавр рекс", period: "Верхнемеловой" },
  { name: "Стегозавр", period: "Верхнеюрский" },
  { name: "Платеозавр", period: "Триасовый" },
];
console.log(dinosaurs[0]); //первый объект
console.log(dinosaurs[0]["name"]); //ключ + индекс
console.log(dinosaurs[0].period); //или так

//73
//Добавить и удалить элементы объекта
let cat = {};
cat.legs = 3;
cat.name = "Гармония";
cat.color = "Черепаховый";
console.log(cat);
console.log(cat.age); //чего нет - того нет

//73
//Все ключи - Object.keys
var dog = {
  name: "Оладушек",
  age: 6,
  color: "белый",
  bark: "гав тяф тяф!",
};
var cat = {
  name: "Гармония",
  age: 8,
  color: "черепаховый",
};
console.log(Object.keys(cat)); //Object.keys(smth) возращает массив, содержащий все ключи объекта
console.log(Object.keys(dog));

//70
//Объекты
var cat = {
  legs: 3, //ключ + значение
  name: "Гармония",
  "full name": "Гармония Филомента Уси-ПУсичкПусичка Морган",
  color: "Черепаховый",
};
console.log(cat["name"]); // призываем объект с помощью ключа
console.log(cat.name); // или так

//69
//Упраженеие - числа больше друг друга
var numbers = [3, 2, 1];
console.log(
  [numbers[0], "больше,", "чем", numbers[1], "больше,", "чем", numbers[2]].join(
    " "
  )
);

//69
//Упражнение - мой генератор дразнилок
var randomBodyPart = ["руки", "ноги", "глаза", "уши"];
var randomAdjectives = [
  "дохлые",
  "скрюченные",
  "мелкие",
  "короткие",
  "медленые",
];
var randomAnimalsPart = ["лапы", "хвост", "копыта", "плавники"];
var randomAnimal = ["козы", "лемура", "кита"];
var randomBodyPart =
  randomBodyPart[Math.floor(Math.random() * randomBodyPart.length)];
var randomAdjectives =
  randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomAnimalsPart =
  randomAnimalsPart[Math.floor(Math.random() * randomAnimalsPart.length)];
var randomAnimal =
  randomAnimal[Math.floor(Math.random() * randomAnimal.length)];
var randomInsult = [
  "У тебя",
  randomBodyPart,
  "ещё более",
  randomAdjectives,
  "чем",
  randomAnimalsPart,
  "у",
  randomAnimal,
];
console.log(randomInsult.join(" ")); //можно с join, а можно с +
console.log(
  "У тебя " +
    randomBodyPart +
    " ещё более " +
    randomAdjectives +
    " чем " +
    randomAnimalsPart +
    " у " +
    randomAnimal
);

//67
//Генератор дразнилок
var randomBodyPart = ["глаз", "нос", "череп"];
var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
var randomBodyPart = randomBodyPart[Math.floor(Math.random() * 3)]; //выбор случайной части тела
var randomAdjectives = randomAdjectives[Math.floor(Math.random() * 3)]; //выбор случайного приллагательного
// var randomWords = randomWords[Math.floor(Math.random() * 5)]; //выбор случайного слова
var randomWords = randomWords[Math.floor(Math.random() * randomWords.length)]; //или так
console.log(
  "У тебя " +
    randomBodyPart +
    " словно " +
    randomAdjectives +
    " " +
    randomWords +
    "!!!"
);
console.log(
  [
    "У тебя",
    randomBodyPart,
    "словно",
    randomAdjectives,
    randomWords + "!!!",
  ].join(" ")
); // можно сделать строку с помощью join - объединить массивы в строку, добавив разделитель

//67
//Выбор случайного варианта
var phrases = [
  "Звучит неплохо",
  "Да, это определенно надо сделать",
  "Не думаю что это хорошая идея",
  "Может, не сегодня?",
  "Компьютер говорит нет",
];
//Мне выпить чаю?
console.log(phrases[Math.floor(Math.random() * 5)]);

//66
//Случайный индекс\нормальное число
console.log(Math.floor(Math.random() * 4)); //случайное число от 0 до 3

var randomWords = ["Пещера", "Лук", "Пробел", "Карандаш"];
var randomIndex = Math.floor(Math.random() * 4);
console.log(randomWords[randomIndex]);
console.log(randomWords[Math.floor(Math.random() * 4)]); //короче

//65
//Случайные числа и округление
console.log(Math.random()); //эти значения от 0 до 1, но не равны 1 никогда
console.log(Math.random());
console.log(Math.random());
console.log(Math.random() * 8); //случайное число от 0 до 8, но никогда не равно 8
console.log(Math.floor(0.2508211334706243)); //округление числа в меньшую сторону (после запятой все откидывается)
console.log(Math.floor(7.4038434259729775));

//61
//Из массива в строку
var boringAnimals = ["Обезьяна", "Кот", "Слон", "Пес"];
console.log(boringAnimals.join());
console.log(boringAnimals.join(" ")); //можно добавить разделитель
console.log(boringAnimals.join(" - "));
console.log(boringAnimals.join("*"));

var ages = [11, 14, 72];
console.log(ages.join(" "));

//60
//Поиск идекса в массиве
var colors = ["красный", "зелёный", "синий"];
console.log(colors.indexOf("зелёный"));
console.log(colors.indexOf("жёлтый")); //элемента нет, поэтому индекс отрицательный
console.log(colors[2]);

var insects = ["Пчела", "Муравей", "Пчела", "Пчела", "Муравей"];
console.log(insects.indexOf("Пчела")); //Если элемент встречается в массиве несколько раз, то indexOf вернет индекс того элемента, который находмится ближе всего к началу массива

//59
//Объединение массивов
var furryAnimals = ["Альпака", "Лемур", "Йети"];
var scalyAnimals = ["Удав", "Годзила"];
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
console.log(furryAndScalyAnimals);
var featheredAnimals = ["Ара", "Додо"];
var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
console.log(allAnimals);

//56-58
//добавить и удалить элементы из массива
var animals = [];
animals.push("Кот"); //добавить к концу масива
animals.push("Пес");
animals.push("Лама");
console.log(animals);
animals.unshift("Мартышка"); //добавить к началу массива
animals.unshift("Белый медведь");
console.log(animals);
animals.pop(); //удалить последний
console.log(animals);
animals.shift(); //удалить первый
console.log(animals);

//55
// Длина массива
var maniacs = ["Якко", "Вакко", "Дот"];
console.log(maniacs.length);
console.log(maniacs[maniacs.length - 1]); //это тоже индекс

//54
//Типы данных в массиве
var dinosaursAndNumbers = [
  3,
  "динозавры",
  ["стегозавр", "трицератопс", 789.893],
  10,
];
console.log(dinosaursAndNumbers[2][0]);

//49-54
// Как записать массив
var myTopThreeDinosaurs = ["Тиранозавр", "Велоцираптор", "Стегозавр"];
var dinosaurs = [
  "Тиранозавр",
  "Велоцираптор",
  "Стегозавр",
  "Трицератопс",
  "Брахиозавр",
  "Птеранодон",
  "Апатозавр",
  "Диплодок",
  "Компосогнат",
];
dinosaurs[0] = "Тиранозавр рекс"; //изменение значения
dinosaurs[20] = "Филосораптор"; //добавление значения
console.log(dinosaurs);

// 47
// Булевые значения. Условие: если посетителю 12 лет или больше, то он может проходить. Если ему еще нет 12, но его сопровождает взрослый, пусть тоже проходит. Иначе нельзя.
var age = 8;
var accompanied = true;
var shouldToGo = age >= 12 || accompanied;
console.log(shouldToGo);

// 40
// Slice
var string = "эЙ, кАК деЛа?";
var lowerString = string.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1);
console.log(firstCharacterUpper + restOfString);

var string = "эЙ, кАК деЛа?";
string = string[0].toUpperCase() + string.slice(1).toLowerCase();
console.log(string);

// 34
// Операторы += -= *= /=
var balloons = 100;
balloons *= 2;
console.log(balloons);

var balloons = 100;
balloons /= 4;
console.log(balloons);

// 32
// Мой возраст в секундах
var age = 18;
var secondsInAMinute = 60;
var hoursInAMinutAminute = 60;
var secondsInAnHour = secondsInAMinute * hoursInAMinutAminute;
var hoursInADay = 24;
var secondsInADay = hoursInADay * secondsInAnHour;
var daysInAYear = 365;
var secondsInAYear = secondsInADay * daysInAYear;
console.log(age * secondsInAYear);

// 22
// Рисуем котиков
var drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
};
drawCats(10);
