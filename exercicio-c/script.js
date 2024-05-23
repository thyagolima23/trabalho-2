alert("Bem-vindo!"); 
let nota1 = Number(prompt("informe a nota do 1B"));
let nota2 = Number(prompt("informe a nota do 2B"));
let nota3 = Number(prompt("informe a nota do 3B"));
let nota4 = Number(prompt("informe a nota do 4B"));
let total = (nota1+nota2+nota3+nota4)/4;
const media = 5;
if (total>=media){
alert(`Aprovado com ${total}`)
}else{
alert(`Reprovado com ${total}`)
}


