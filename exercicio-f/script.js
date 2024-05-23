alert("Bem-vindo!");
let valor1 = Number(prompt("informe o valor1"));
let valor2 = Number(prompt("informe o valor2"));
let valor3 = Number(prompt("informe o valor3"));
let menor, maior, meio;
if ((valor1<valor2) && (valor1<valor3)){
      menor=valor1
    if (valor2<valor3){
       meio=valor2
       maior=valor3
    }else{
       meio=valor3
       maior=valor2
   }
}

if((valor2<valor1) && (valor2<valor3)){
       menor=valor2
   if(valor1<valor3){
      meio=valor1
      maior=valor3
   }else{
      meio=valor3
      maior=valor1
  }
}

if((valor3<valor1) && (valor3<valor2)){
    menor=valor3
   if(valor1<valor2){
     meio=valor1
     maior=valor2
   }else{
      meio=valor2
      maior=valor1
 }
}
alert(`${menor} ${meio} ${maior}`);