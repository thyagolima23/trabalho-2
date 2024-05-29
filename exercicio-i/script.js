alert("Bem-vindo!");
let valor1 = parseInt(prompt("informe o valor 1"));
let valor2 = parseInt(prompt("informe o valor 2"));
let valor3 = parseInt(prompt("informe o valor 3"));
let valor4 = parseInt(prompt("informe o valor 4"));
let valor5= parseInt(prompt("informe o valor 5"));
let maior, menor;
if((valor1<valor2) && (valor1<valor3) && (valor1<valor4) && (valor1<valor5)){
    menor=valor1
  }
if((valor1>=valor2) && (valor1>=valor3) && (valor1>=valor4) && (valor1>=valor5)){
    maior=valor1
  }
if((valor2<valor1) && (valor2<valor3) && (valor2<valor4) && (valor2<valor5)){
    menor=valor2
  }
if((valor2>=valor1) && (valor2>=valor3) && (valor2>=valor4) && (valor2>=valor5)){
    maior=valor2
  }
if((valor3<valor1) && (valor3<valor2) && (valor3<valor4) && (valor3<valor5)){
    menor=valor3
  }
if((valor3>=valor1) && (valor3>=valor2) && (valor3>=valor4) && (valor3>=valor5)){
    maior=valor3
  }
if((valor4<valor1) && (valor4<valor2) && (valor4<valor3) && (valor4<valor5)){
    menor=valor4
  }
if((valor4>=valor1) && (valor4>=valor2) && (valor4>=valor3) && (valor4>=valor5)){
    maior=valor4
  }
if((valor5<valor1) && (valor5<valor2) && (valor5<valor3) && (valor5<valor4)){
    menor=valor5
  }
if((valor5>=valor1) && (valor5>=valor2) && (valor5>=valor3) && (valor5>=valor4)){
    maior=valor5
  }
alert(`maior valor é ${maior} menor valor é ${menor}`);