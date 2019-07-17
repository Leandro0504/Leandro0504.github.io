function minhaFunção() {
    //O uso mais comum para saída de dados
    document.getElementById("demo").innerHTML = "Parágrafo mudado";

    //window.alert("Este é um alerta!");
    //Uso mais comum para depuração de dados
    console.log("Só apareço com f12");//apertando no botão
}

function minhaFunção2() {
    if(document.getElementById("demo1").innerText.length === 0){ 
    //se demo1 está vazio, escrever dentro (inner) dele
    document.getElementById("demo1").innerHTML = "Olá Dollinho!";
    document.getElementById("demo2").innerHTML = "O melhor do Brasil. O melhor!";
  }else{

    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo2").innerHTML = "";
    document.querySelector("#divCentral").style.border = "none";
  }
}
  