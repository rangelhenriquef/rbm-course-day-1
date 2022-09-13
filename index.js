"use strict";
// 1
function sum(n1, n2) {
    console.log(n1 + n2);
}
sum(10, 2); // 12
// 2
function avg(n1, n2, n3, n4, n5) {
    console.log((n1 + n2 + n3 + n4 + n5) / 5);
}
avg(5, 6, 2, 9, 8); // 6
// 3
function imc(peso, altura) {
    console.log(peso / Math.pow(altura, 2));
}
imc(70, 1.73); // 23.39
