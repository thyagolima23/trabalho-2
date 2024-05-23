alert("Bem-vindo!"); 
let a = Number(prompt("informe o valor a"));
let b = Number(prompt("informe o valor b"));
let c = Number(prompt("informe o valor c"));
let delta = ((b**2)-4*a*c)**(1/2);

let x1,x2
if(delta==0){
    x1 = (-1*b)/(2*a)
    x2 = x1
}else{
   if(delta>0){
        x1 = ((-1*b)+delta)/(2*a); 
        x2 = ((-1*b)+(-1*delta))/(2*a)
   }else{
      if(isNaN(delta)){
          alert ("Não tem raiz");
      }
   }
}

alert(`${x1} e ${x2}`);