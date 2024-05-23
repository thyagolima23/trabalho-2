alert("Bem-vindo!");
let aluno = prompt("Qual o nome do(a) aluno(a)?");
let nota1 = Number(prompt("informe a nota do 1B"));
let nota2 = Number(prompt("informe a nota do 2B"));
let nota3 = Number(prompt("informe a nota do 3B"));
let nota4 = Number(prompt("informe a nota do 4B"));

condicao = 7;

let total = (nota1+nota2+nota3+nota4)/4;

if(total>=condicao){
		alert(`Aluno(a) ${aluno} Aprovado(a)!`);
}else{
		let notaExame = Number(prompt("informe a nota do exame"));

		if(notaExame>=condicao){
		alert(`Aluno(a) Aprovado(a) em exame com ${condicao}`);
	}else{
		
		alert(`Aluno(a) Reprovado(a) em exame com ${condicao}`);
 	}	
                                      
          
}


