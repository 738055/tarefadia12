/*
1. Falha inesperada do programa:

O programa para de executar abruptamente no ponto em que a exceção não capturada ocorre. 
Isso pode levar à perda de dados não salvo e interrupção de tarefas em andamento

2. Mensagem de erro genérica:

O navegador ou ambiente JavaScript exibe uma mensagem de erro genérica que pode não fornecer
informações suficientes sobre a causa do problema. Isso dificulta a depuração e a correção do erro.

3. Comportamento imprevisível:

O comportamento do programa após a exceção não capturada é imprevisível. 
Em alguns casos, o programa pode continuar a executar parcialmente, mas com resultados 
incorretos ou até mesmo travamentos.


*/

function dividir(dividendo, divisor) {
    try {
      if (divisor === 0) {
        throw new Error("Divisão por zero!"); // Lança
      }
      const resultado = dividendo / divisor;
      return resultado;
    } catch (erro) {
      console.log(erro); // Captura
      return "A divisão por zero não é permitida."; // Retorna um valor de visualização para o usuário
    }
  }             "+", "-", "*", "/", "%"
  
  /*const resultado1 = dividir(10, 2);
  console.log("10 / 2 =", resultado1);*/
  
  const resultado2 = dividir(10, 0);
  console.log("10 / 0 =", resultado2);


 /*function dividir2(dividendo, divisor) {

      if (divisor === 0) {
        throw new Error("Divisão por zero!");
      }

      const resultado = dividendo / divisor;
      return resultado;
  }
  
  const resultado3 = dividir2(10, 2);
  console.log("10 / 2 =", resultado3);
  
  try{
    const resultado4 = dividir2(10, 0);
    console.log("10 / 0 =", resultado4);
  }catch(e){
    console.log(e)
  }*/


function calculadora(num1, num2, operador){

    if(!["+", "-", "*", "/", "%"].includes(operador))
        throw new Error("Operador nao existente")
    if(typeof num1 !== "number"){
        throw new Error("O parametro num1 nao eh um numero")
    }
    if(typeof num2 !== "number"){
        throw new Error("O parametro num1 nao eh um numero")
    }

    switch(operador){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1*num2;
        case "/":
            if(num2 == 0){
                throw new Error("A operacao nao pode ser executada pois o divisor eh 0")
            }
            return num1/num2
        case "%":
            if(num2 == 0){
                throw new Error("A operacao nao pode ser executada pois o divisor eh 0")
            }
            return num1%num2;

    }
}


try{
    calculadora(1,0,"-")
}catch(erro){
    console.log("Houve um erro na utilizacao da funcao calculadora ", erro.message)
}