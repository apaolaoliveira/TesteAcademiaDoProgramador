
function executarFuncoes(){
    document.getElementById("resultado").innerHTML = ""; // Limpar resultados
    document.getElementById("angulo").innerHTML = ""; 
    classificarTriangulo();
    calcularAngulos();
}

function classificarTriangulo(){

    const elementoResultado = document.getElementById("resultado");

    // variáveis dos lados do triângulo
    const lado1 = parseInt(document.getElementById("lado1").value);
    const lado2 = parseInt(document.getElementById("lado2").value);
    const lado3 = parseInt(document.getElementById("lado3").value);

    //Triângulos inválidos
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        elementoResultado.innerHTML = "Preencha todos os campos com números!";
    } 
    else if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        elementoResultado.innerHTML = "Os lados do triângulo devem ser maiores que zero!";
    } 
    else if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        elementoResultado.innerHTML = "Triângulo Inválido.";
    } 
    else {
        // Verifica a classificação do triângulo inserido
        if (lado1 === lado2 && lado1 === lado3 && lado2 === lado3) {
        elementoResultado.innerHTML = "Triângulo Equilátero.";
        } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
        elementoResultado.innerHTML = "Triângulo Escaleno.";
        } else {
        elementoResultado.innerHTML = "Triângulo Isósceles.";
        }
    }
}

/*Fórmula da Lei dos Cossenos:
    cos(A) = (b² + c² - a²) / (2 * b * c)
    cos(B) = (a² + c² - b²) / (2 * a * c)
    cos(C) = (a² + b² - c²) / (2 * a * b)
*/

function calcularAngulos(){

    // variáveis dos lados do triângulo
    const lado1 = parseInt(document.getElementById("lado1").value);
    const lado2 = parseInt(document.getElementById("lado2").value);
    const lado3 = parseInt(document.getElementById("lado3").value);

    // verificação se os lados formam um triângulo válido
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {

    //Variáveis com a fórmula
    const cos1 = Math.acos((lado2 ** 2 + lado3 ** 2 - lado1 ** 2) / (2 * lado2 * lado3));/*O math.acos serve para retornar o ângulo em radianos*/
    const cos2 = Math.acos((lado1 ** 2 + lado3 ** 2 - lado2 ** 2) / (2 * lado1 * lado3));
    const cos3 = Math.acos((lado1 ** 2 + lado2 ** 2 - lado3 ** 2) / (2 * lado1 * lado2));

    // Variáveis para converter os cossenos em graus
    const grau1 = (cos1 * 180) / Math.PI; 
    const grau2 = (cos2 * 180) / Math.PI; /*O math.pi representa o valor de π*/
    const grau3 = (cos3 * 180) / Math.PI;

    //Mostra o resultado na tela 
    const elementoAngulo = document.getElementById("angulo");
    elementoAngulo.innerHTML = `Esse triângulo tem os ângulos de: ${grau1.toFixed(0)}º, ${grau2.toFixed(0)}º e ${grau3.toFixed(0)}º.`;
    } 
    else {
        return;
    }
}




