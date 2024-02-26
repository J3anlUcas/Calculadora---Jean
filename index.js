const Calculadora = require("./Calculadora");

let calc = new Calculadora();

calc.somar(10);

calc.subtrair(5);

calc.multiplicar(3);

calc.dividir(2);


calc = null; // libera a memória ocupada pelo objeto calc7