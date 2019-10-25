function telaInicial(){
  image(imgInicial, 0, 0, 600, 400);
  textSize(15);
  textAlign(CENTER);
  fill("white");
  text("Feito por Leandro Zanella AIPR2019v1", 460, 387);
  
}

function setup() {
  createCanvas(larguraTela, alturaTela);
  somTrilha.play();
  somTrilha.loop();
  somTrilha.setVolume(0.3);
}

function draw() {
  if(frameCount <400) //10 Segundos
    telaInicial();
  else
  jogar()
}