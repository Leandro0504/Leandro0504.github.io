function jogar(){
  if(placarPanda < 5 && placarUrso < 5){
    background(imgEstrada); 
    mostraUrso();
    mostraPanda();
    movimentaUrso();
    movimentaPanda();
    mostraCarros();
    movimentaCarros();
    mostraPlacar();
    adicionaPontos();
    atropelamento();
  }else{
    //Verifica e mostra o campeão
    if(placarPanda == 5 )
      PandaVenceu();
    else
      UrsoVenceu();
  } 
}

function mostraPlacar(){
  textSize(30);
  
  fill("white");
  text(placarPanda,larguraTela - 50, 30);
  
  fill("brown");
  text(placarUrso, larguraTela - 555, 30);
  
}

function UrsoVenceu(){
  image(imgEstrada, 0, 0, 600, 400);
  image(imgUrso, metadeTela - 100, alturaTela/2 - 100, 200, 200);
  textSize(40);
  fill("brown");
  textAlign(CENTER);
  text("Urso Venceu!", metadeTela, alturaTela/2 - 130);

}//Fim do Letras Venceu

function PandaVenceu(){
  image(imgEstrada, 0, 0, 600, 400);
  image(imgPanda, metadeTela - 100, alturaTela/2 - 100, 200, 200);
  textSize(40);
  fill("white");
  textAlign(CENTER);
  text("Panda Venceu!", metadeTela, alturaTela/2 - 130);

}//Fim do Setas Venceu

function adicionaPontos(){
  
  //Lado direito
  if(yPanda <= 20 ){
    placarPanda += 1;
    yPanda = 364;
    somPonto.play();
  }
  
  //Lado esquerdo 
  if(yUrso <= 20){
    placarUrso += 1;
    yUrso = 368;
    somPonto.play();
  }
}//Fim Adiciona Pontos