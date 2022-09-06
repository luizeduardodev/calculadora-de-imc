//Variaveis Globais;
const strong = document.querySelector("strong"); //Onde vai aparecer o resultado;
const linha1 = document.querySelector(".linha1");
const linha2 = document.querySelector(".linha2");
const linha3 = document.querySelector(".linha3");
const linha4 = document.querySelector(".linha4");
const linha5 = document.querySelector(".linha5");
const linha6 = document.querySelector('.linha6');
const linha7 = document.querySelector(".linha7");

//Função - estilos - tabela;
const tableStyles = (linha) => {
    linha.style.cssText = `background-color: black; transition: all 0.5s ease;color: white;`;   
}

//Função para calculcar o imc;
const calcularImc = () => {
    let peso = document.querySelector(".peso").value;
    let altura = document.querySelector(".altura").value;
    // var imc;
    var imc;

    if (peso !== '' && altura !== '') { //Se o formulario estiver preenchido;
        if (strong.style.fontSize = "1rem") {
            strong.style.fontSize = "1.7rem";
        }

        //Realiza o calculo do imc;
        altura = altura / 100; //Transforma cm em m;
        imc = peso / Math.pow(altura, 2); //Faz o cálculo;
        imc = imc.toFixed(2); //Deixa com 2 casa decimais;
        console.log(imc);
        strong.innerHTML = imc; //Adiciona o resultado na tela;
        console.log(strong);
    } else { //Se o formulario não estiver preenchido; 
        strong.style.fontSize = "1rem";
        strong.style.marginTop = "10px";
        strong.innerHTML = "Preencha todos os campos!";
    }

    ShowResultsInTheTable(imc);
}

//Função - show result in table;
const ShowResultsInTheTable = (imc) => {
    const saude = document.querySelector(".como-esta-a-saude");
    const arrayMagreza = ["Magreza Grave", "Magreza Leve", "Saudável", "Sobrepeso", "Obesidade de Grau 1", "Obesidade Grau 2(severa)", "Obesidade Grau 3(mórbida)"];

    if (imc < 17) {
        tableStyles(linha1); //Adiciona estilos na linha;
        saude.innerHTML = arrayMagreza[0];
    } else {
        if (imc >= 17 && imc < 18.5) {
            tableStyles(linha2); //Adiciona estilos na linha;
            saude.innerHTML = arrayMagreza[1];
        } else {
            if (imc >= 18.5 && imc < 25) {
                tableStyles(linha3); //Adiciona estilos na linha;
                saude.innerHTML = arrayMagreza[2];
            } else {
                if (imc >= 25 && imc < 30) {
                    tableStyles(linha4); //Adiciona estilos na linha;
                    saude.innerHTML = arrayMagreza[3];
                } else {
                    if (imc >= 30 && imc < 35) {
                        tableStyles(linha5); //Adiciona estilos na linha;
                        saude.innerHTML = arrayMagreza[4];
                    } else {
                        if (imc >= 35 && imc < 40) {
                            tableStyles(linha6); //Adiciona estilos na linha;
                            saude.innerHTML = arrayMagreza[5];
                        } else {
                            if (imc > 40) {
                                tableStyles(linha7); //Adiciona estilos na linha;
                                saude.innerHTML = arrayMagreza[6];
                            }
                        }
                    }
                }
            }
        }
    }
}

//Função para remover os estilos da tabela;
const removeTableStyles = (linha) => {
    linha.style = ""; //limpando todos os estilos da linha;
    linha.style.transition = "0.5s";
}

const limparImc = () => {
    if (strong.style.fontSize === "0.7rem") {
        strong.style.fontSize = "1.7rem";
    }

    strong.innerHTML = "";

    let pesso = document.querySelector(".peso").value = "";
    let alturaa = document.querySelector(".altura").value = "";
    let saude = document.querySelector(".como-esta-a-saude").innerHTML = "";

    removeTableStyles(linha1);
    removeTableStyles(linha2);
    removeTableStyles(linha3);
    removeTableStyles(linha4);
    removeTableStyles(linha5);
    removeTableStyles(linha6);
    removeTableStyles(linha7);

    if (strong === '' && pesso === '' && alturaa === '' && saude === '') {
        strong.style.fontSize = "1.7rem";
    }
}