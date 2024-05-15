function dividir(dividendo, divisor) {
    try {
      if (divisor === 0) {
        throw new Error("Divisão por zero!"); 
      }
      const resultado = dividendo / divisor;
      return resultado;
    } catch (erro) {
      console.log(erro);
      return "A divisão por zero não é permitida."; 
    }
  }             "+", "-", "*", "/", "%"
 
  
  const resultado2 = dividir(10, 0);
  console.log("10 / 0 =", resultado2);



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

function calculadora(num1, num2, operacao) {

  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    throw new Error("Parametrização inválida: num1 e num2 devem ser números inteiros.");
  }

  
  const operacoesValidas = ["+", "-", "*", "/", "%"];
  if (!operacoesValidas.includes(operacao)) {
    throw new Error(`Operador inválido: '${operacao}' não é uma operação válida.`);
  }


  switch (operacao) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        throw new Error("Divisão por zero não permitida.");
      }
      return num1 / num2;
    case "%":
      if (num2 === 0) {
        throw new Error("Operação de módulo por zero não permitida.");
      }
      return num1 % num2;
  }
}

try{
    calculadora(1,0,"-")
}catch(erro){
    console.log("Houve um erro na utilizacao da funcao calculadora ", erro.message)
}