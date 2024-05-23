alert("Bem-vindo!"); 
let valor1 = Number(prompt("informe o valor 1"));
let valor2 = Number(prompt("informe o valor 2"));
let valor3 = Number(prompt("informe o valor 3"));
let valor4 = Number(prompt("informe o valor 4"));
let resultado = [];
if(valor1%2==0 ||  valor1%3==0){
   resultado.push( valor1);
}
if(valor2%2==0 || valor2%3==0){
   resultado.push(valor2);
}
if(valor3%2==0 || valor3%3==0){
   resultado.push(valor3);
}
if(valor4%2==0 || valor4%3==0){
   resultado.push(valor4);
}
if(resultado.length<1){
  alert("Valor invalido");	
}
alert(resultado);
