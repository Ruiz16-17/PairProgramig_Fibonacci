function fibonacci(){
    var valorImput = document.getElementById('txtLimiteSerie').value;
    var numeros = [];
    valorImput = parseInt(valorImput);
    for (index = 0; index <= valorImput; index++ ){
        if (index == 0) {
            numeros.push(0);
        }else if (index==1) {
            numeros.push(1);
        } else {
            numeros.push(numeros[index-1]+numeros[index-2]);
        }
    }
    
    return numeros;
}

function imprimirSerie() {
    
    var serieFibonacci = fibonacci();
    var serieFibonacciImprimir = [];
    var saltoLinea = 0;

    for (let i = 0; i < serieFibonacci.length; i++) {
    
        if(saltoLinea == 19){
            
            serieFibonacciImprimir.push("\n");

            saltoLinea = 0;
        }
        serieFibonacciImprimir.push(serieFibonacci[i]);
        saltoLinea++;
    }

    document.getElementById("resultado").innerHTML = "<label>"+serieFibonacciImprimir+"</label>";
}
