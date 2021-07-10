function clicar(){
    var peso = document.querySelector(".peso").value;
    var altura = document.querySelector(".altura").value;

    if(peso !== '' && altura !== ''){
        altura = altura / 100;
        var imc = peso / Math.pow(altura, 2);
        var arredondado = parseFloat(imc.toFixed(2));
        document.querySelector("strong").innerHTML = arredondado;
    }else{
        document.querySelector("strong").style.fontSize = "0.7em";
        document.querySelector("strong").style.marginTop = "10px";
        document.querySelector("strong").innerHTML = "Preencha todos os campos!";
    }

    if( arredondado < 17 ){
            document.querySelector('.linha1').style.backgroundColor = "black";
            document.querySelector(".linha1").style.transition = "all .5s";
            document.querySelector(".linha1").style.color = "white";
            document.querySelector(".como-esta-a-saude").innerHTML = "Magreza Grave";
    }else{
        if( arredondado >= 17 && arredondado < 18.5 ){
            document.querySelector('.linha2').style.backgroundColor = "black";
            document.querySelector(".linha2").style.transition = "all .5s";
            document.querySelector(".linha2").style.color = "white";
            document.querySelector(".como-esta-a-saude").innerHTML = "Magreza Leve";
        }else{
            if( arredondado >= 18.5 && arredondado < 25){
                document.querySelector(".linha3").style.backgroundColor = "black";
                document.querySelector(".linha3").style.color = "white";
                document.querySelector(".linha3").style.transition = "all .5s";
                document.querySelector(".como-esta-a-saude").innerHTML = "Saudável";
            }else{
                if( arredondado >= 25 && arredondado < 30){
                    document.querySelector(".linha4").style.backgroundColor = "black";
                    document.querySelector(".linha4").style.color = "white";
                    document.querySelector(".linha4").style.transition = "all .5s";
                    document.querySelector(".como-esta-a-saude").innerHTML = "Sobrepeso";
                }else{
                    if( arredondado >= 30 && arredondado < 35){
                        document.querySelector(".linha5").style.backgroundColor = "black";
                        document.querySelector(".linha5").style.transition = "all .5s";
                        document.querySelector(".linha5").style.color = "white";
                        document.querySelector(".como-esta-a-saude").innerHTML = "Obesidade de Grau 1";
                    }else{
                        if( arredondado >= 35 && arredondado < 40){
                            document.querySelector(".linha6").style.backgroundColor = "black";
                            document.querySelector(".linha6").style.transition = "all .5s";
                            document.querySelector(".linha6").style.color = "white";
                            document.querySelector(".como-esta-a-saude").innerHTML = "Obesidade Grau 2(severa)";
                        }else{
                            if( arredondado > 40){
                                document.querySelector(".linha7").style.backgroundColor = "black";
                                document.querySelector(".linha7").style.transition = "all .5s";
                                document.querySelector(".linha7").style.color = "white";
                                document.querySelector(".como-esta-a-saude").innerHTML = "Obesidade Grau 3(mórbida)";
                            }
                        }
                    }
                }
            }
        }
    }
}


function limpar(){
    document.querySelector("strong").innerHTML = '';
    document.querySelector(".peso").value = ''; 
    document.querySelector(".altura").value = '';
    document.querySelector(".como-esta-a-saude").innerHTML = "";

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
}