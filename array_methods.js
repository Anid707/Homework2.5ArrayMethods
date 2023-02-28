// Задание 1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.
function ucFirst(str){
    str = str.charAt(0).toUpperCase() + str.slice(1, str.length);
    console.log(str);
}
ucFirst("chicken");


// Задание 2
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.
function checkSpam(str){
    let isSpam = true;
    if (str.toLowerCase().includes("badWord".toLowerCase())  || str.toUpperCase().includes("XXX")){
        isSpam = true;
    } else {
        isSpam = false;
    }
    console.log(isSpam);
}

checkSpam("badword");


// Задание 3
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
// Обратите внимание: метод reverse существует только у массивов.
const strReverse = (str) => {
    let strArr = str.split(" ");
    let wordReversed = null;
    let newArr = [];
    strArr.forEach(word => {
        let charOfWord = word.split("");
        console.log(charOfWord);
        wordReversed = charOfWord.reverse();
        let text = wordReversed.join("");
        newArr.push(text);
        console.log(newArr);

    });
    newArr = newArr.reverse();
    console.log(newArr.join(" "));
}
strReverse("привет Женя");


// Задание 4
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 
// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль
// ПОДСКАЗКА:
// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк

let stations = [
'MAN675847583748sjt567654;Manchester Piccadilly',
'GNF576746573fhdg4737dh4;Greenfield',
'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
'SYB4f65hf75f736463;Stalybridge',
'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

stations.forEach(element => {
    let stationCode = element.slice(0, 3);
    let stationName = element.slice(element.indexOf(";")+1, element.length);
    console.log(stationCode + ": " + stationName);
});


// Задание 5
// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
// Пример:
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// console.log(unique(strings)); должен вывести "кришна, харе, :-O"
// ПОДСКАЗКА
// - создать новый массив
// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные.

const unique = (arr) => {
    let newArr = [];
    arr.forEach(element => {
        if (newArr.includes(element) === false){
            newArr.push(element);
        }
    });
    return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
console.log(unique(strings));