/*
Задание 1
Если значение переменной равно единице, выведем в консоль какое-нибудь сообщение.
*/
let l=1;
if(l=1){
    console.log("Это сообщение здесь только потому,что переменная равна 1")
}

/*
Задание 2
Проверим, значение переменной больше нуля или нет. Вывести в консоль соответствующее сообщение.
*/
let j=0;
if(j<=0){
    console.log(`Переменная ноль или меньше ноля`);
}
else {
    console.log(`Переменная больше ноля`);
}
/*
Задание 3
Создайте переменные m и n. В m поместите произвольное числовое значение. Напишите оператор ветвления if так, чтобы если m было больше 50, то в переменную n помещалось слово «большое», иначе — слово «маленькое».
*/
let m = 1;
let n = "";
if (m > 50) {
    n = "большое";
} else {
    n = "маленькое";
}
/*
Задание 4 (else if)
Проверить, хранится ли в переменной число 1, 2 или 3 и вывести соответствующее значение в консоль. Во всех остальных случаях вывести в консоль сообщение "Неизвестное значение".
*/
let a = 3;
if (a == 1){
    console.log("a = 1")
}
else if (a == 2){
    console.log("a = 2")
}
else if (a == 3){
    console.log("a = 3")
}
else{
    console.log("Неизвестное значение")
}
/*
Задание 5
Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.
*/
let s = 45;
while(s <= 67) {
    console.log(s);
    s++;
}
console.log("===========================");
/*
Задание  6
Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.
*/
let d = 45;
while(d<=670){ 
    if(d % 10 == 0) {
        console.log(d);
    }
    d++;
}
console.log("===========================");
/*
Задание 7
Напишите скрипт, который используя оператор for выполнит два предыдущих задания.
*/
for(let x = 45; x <= 67; x++){
    console.log(x);
}
console.log("===========================");
for(let y = 45; y<=670; y++){
    if(y % 10 == 0){
        console.log(y);
    }
}
console.log("===========================");




