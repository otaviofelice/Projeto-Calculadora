/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
//funcionalidade 

//alert("CACHORRO CHUPETAO");

let botao0 = document.getElementById("b0");
let botao1 = document.getElementById("b1");
let botao2 = document.getElementById("b2");
let botao3 = document.getElementById("b3");
let botao4 = document.getElementById("b4");
let botao5 = document.getElementById("b5");
let botao6 = document.getElementById("b6");
let botao7 = document.getElementById("b7");
let botao8 = document.getElementById("b8");
let botao9 = document.getElementById("b9");


let opmult = document.getElementById("ba");
let opdiv = document.getElementById("bb");
let opsoma = document.getElementById("bc");
let opsub = document.getElementById("bf");

let auxiliar = document.getElementById("Auxiliar");
let operador = document.getElementById("Operador");

let botaoponto = document.getElementById("bd");
let botaoig = document.getElementById("be");
let botaoap = document.getElementById("bg");

botao0.addEventListener("click",function (){numero(this.value)});
botao1.addEventListener("click",function (){numero(this.value)});
botao2.addEventListener("click",function (){numero(this.value)});
botao3.addEventListener("click",function (){numero(this.value)});
botao4.addEventListener("click",function (){numero(this.value)});
botao5.addEventListener("click",function (){numero(this.value)});
botao6.addEventListener("click",function (){numero(this.value)});
botao7.addEventListener("click",function (){numero(this.value)});
botao8.addEventListener("click",function (){numero(this.value)});
botao9.addEventListener("click",function (){numero(this.value)});
opmult.addEventListener("click",function(){op(this.value)});
opdiv.addEventListener("click",function(){op(this.value)});
opsoma.addEventListener("click",function(){op(this.value)});
opsub.addEventListener("click",function(){op(this.value)});



//para apagar o zero do mostrador e substituir pelo numero do botao 

 botaoig.addEventListener("click",igual);
 botaoap.addEventListener("click",apagar);
 botaoponto.addEventListener("click",ponto);
 
 
function numero(valor){
    
    let aux = document.getElementById("Mostrador");
    aux.value += valor;
    if (aux.value.indexOf(".")-1) {
    aux.value = parseFloat(aux.value);
    }
    
} 
function op(conteudo){
    if (operador.value !="") {
        igual();
    }
    let mostra = document.getElementById("Mostrador");
    auxiliar.value = mostra.value; 
    mostra.value = " ";
    operador.value = conteudo;
 
}
function igual(){
    
    let mostrador = document.getElementById("Mostrador");
    let operador1 =  parseFloat(mostrador.value);
    let operador2= parseFloat(auxiliar.value);
    let operacao =operador.value;
    
    
    if (operacao == "x") {
      
      mostrador.value = operador2*operador1;
       
     
    }
    
    if (operacao == "/") {
        
        mostrador.value = operador2/operador1;
     
    
    }
    
    if (operacao == "+") {
        
        mostrador.value = operador2+operador1;
        
    
    }
    
    if (operacao == "-") {
        
        mostrador.value = operador2-operador1;

    
    }
       auxiliar.value = "";
       operador.value = "";
 
}
function apagar(){
   
       document.getElementById("Mostrador").value= "0";
       auxiliar.value = "";
       operador.value = "";
}

function ponto(){
    
       let mostrador = document.getElementById("Mostrador");
       mostrador.value = parseFloat(mostrador.value);
      if (mostrador.value.indexOf(".") == -1) {
        mostrador.value +=".";
         
    }
    
    
}