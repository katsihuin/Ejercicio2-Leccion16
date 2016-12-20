var num1, num2, num3, suma, promedio;

num1 = prompt("Por favor, ingresa el primer número");
num2 = prompt("Por favor, ingresa el segundo número");
num3 = prompt("Por favor, ingresa el tercer número");

suma = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);

promedio = parseFloat(suma)/3;

alert(promedio);