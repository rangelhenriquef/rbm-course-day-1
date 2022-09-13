// 1

function sum(n1: number, n2: number){
    console.log(n1 + n2);
}

sum(10, 2);  // 12


// 2

function avg(n1:number, n2:number, n3:number, n4:number, n5:number){
    console.log((n1 + n2 + n3 + n4 + n5) / 5)
}

avg(5, 6, 2, 9, 8)  // 6


// 3

function imc(peso:number, altura:number){
    console.log(peso / Math.pow(altura, 2))
}

imc(70, 1.73);  // 23.39
