//Pegando o valor do botão calcular
var caucular = document.getElementById('calc')



function imc() {
    //pegando os valores das variáveis para fazer o calculo
    var nome = document.getElementById('nome').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var resultado = document.getElementById('result');

    //validando se as informações foram preenchidas
    if (nome !== '' && altura !== '' && peso !== '') {

        //fazendo o calculo do imc
        const valorIMC = (peso / (altura * altura)).toFixed(3);

        //classificando o imc
        let classificação = '';
        if (valorIMC < 18.5) {
            classificação = 'abaixo do peso';
        } else if (valorIMC < 25) {
            classificação = 'com peso ideal, parabéns!';
        } else if (valorIMC < 30) {
            classificação = 'levemente acima do peso';
        } else if (valorIMC < 35) {
            classificação = 'com obesidade grau 1';
        }else if (valorIMC < 40) {
            classificação = 'com obrsidade grau 2';
        }else if (valorIMC < 45) {
            classificação = 'com obesidade grau 3 (obesidade mórbida), cuidado!';
        }


        //impindo o resultado do calculo com a classificação na tela
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificação}`

    } else {
        resultado.textContent = 'Preencha todos os campos'
    }



}
// escutando o botão calcular para ativar a função
caucular.addEventListener('click', imc);

