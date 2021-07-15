function clicar(){
    let peso = document.querySelector(".peso").value;
    let altura = document.querySelector(".altura").value;

    if(peso !== '' && altura !== ''){
        altura = altura / 100;
        let imc = peso / Math.pow(altura, 2);
        var arredondado = parseFloat(imc.toFixed(2));
        document.querySelector("strong").innerHTML = arredondado;
    }else{
        document.querySelector("strong").style.fontSize = "0.7em";
        document.querySelector("strong").style.marginTop = "10px";
        document.querySelector("strong").innerHTML = "Preencha todos os campos!";
    }

    if( arredondado < 17 ){
        let linha1 = document.querySelector(".linha1");
        let saude = document.querySelector(".como-esta-a-saude");

        linha1.style.backgroundColor = "black";
        linha1.style.transition = ".5s";
        linha1.style.color = "white";
        saude.innerHTML = "Magreza Grave";
    }else{
        if( arredondado >= 17 && arredondado < 18.5 ){
            let linha2 = document.querySelector(".linha2");
            let saude = document.querySelector(".como-esta-a-saude");

            linha2.style.backgroundColor = "black";
            linha2.style.transition = ".5s";
            linha2.style.color = "white";
            saude.innerHTML = "Magreza Leve";
        }else{
            if(arredondado >= 18.5 && arredondado < 25){
                let linha3 = document.querySelector(".linha3");
                let saude = document.querySelector(".como-esta-a-saude");

                linha3.style.backgroundColor = "black";
                linha3.style.transition = ".5s";
                linha3.style.color = "white";
                saude.innerHTML = "Saudável";
            }else{
                if( arredondado >= 25 && arredondado < 30){
                    let linha4 = document.querySelector(".linha4");
                    let saude = document.querySelector(".como-esta-a-saude");

                    linha4.style.backgroundColor = "black";
                    linha4.style.transition = ".5s";
                    linha4.style.color = "white";
                    saude.innerHTML = "Sobrepeso";
                }else{
                    if( arredondado >= 30 && arredondado < 35){
                        let linha5 = document.querySelector(".linha5");
                        let saude = document.querySelector(".como-esta-a-saude");

                        linha5.style.backgroundColor = "black";
                        linha5.style.transition = ".5s";
                        linha5.style.color = "white";
                        saude.innerHTML = "Obesidade de Grau 1";
                    }else{
                        if( arredondado >= 35 && arredondado < 40){
                            let linha6 = document.querySelector('.linha6');
                            let saudee = document.querySelector(".como-esta-a-saude");

                            linha6.style.backgroundColor = "black";
                            linha6.style.transition = ".5s";
                            linha6.style.color = "white";
                            saudee.innerHTML = "Obesidade Grau 2(severa)";
                            saudee.style.fontSize = "1.5rem";
                        }else{
                            if( arredondado > 40){
                                let linha7 = document.querySelector(".linha7");
                                let saude = document.querySelector(".como-esta-a-saude");

                                linha7.style.backgroundColor = "black";
                                linha7.style.transition = ".5s";
                                linha7.style.color = "white";
                                saude.innerHTML = "Obesidade Grau 3(mórbida)";
                                saude.style.fontSize = "1.4rem";
                            }
                        }
                    }
                }
            }
        }
    }
}


function limpar(){
    let strongg = document.querySelector("strong").innerHTML = '';
    let pesso = document.querySelector(".peso").value = '';
    let alturaa = document.querySelector(".altura").value = '';
    let saude = document.querySelector(".como-esta-a-saude").innerHTML = "";

    /* Resetando os itens da tabela */
    document.querySelector(".linha1").style = '';
    document.querySelector(".linha1").style.transition = "all .5s";
    document.querySelector(".linha2").style = '';
    document.querySelector(".linha2").style.transition = "all .5s";
    document.querySelector(".linha3").style = '';
    document.querySelector(".linha3").style.transition = "all .5s";
    document.querySelector(".linha4").style = '';
    document.querySelector(".linha4").style.transition = "all .5s";
    document.querySelector(".linha5").style = '';
    document.querySelector(".linha5").style.transition = "all .5s";
    document.querySelector(".linha6").style = '';
    document.querySelector(".linha6").style.transition = "all .5s";
    document.querySelector(".linha7").style = '';
    document.querySelector(".linha7").style.transition = "all .5s";

    if(strongg === '' &&  pesso === '' && alturaa === '' && saude === ''){
        strongg.document.style.fontSize = "1.7rem";
    }
}