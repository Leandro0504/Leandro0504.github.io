let tocouMinhaRaquete = false;
let tocouRaqueteOponente = false;

// Dimensões da tela
let alturaTela = 600;
let larguraTela = 1280;
let metadeTela = larguraTela/2; 

// Variáveis em Javascript da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let velocidadeX = 13;
let velocidadeY = 13;
let aumentoDeVelocidade = 1.5;
let raio = diametro / 2;

// Variáveis das raquetes
let velocidadeRaquete = 15;
let alturaRaquete = 110;
let larguraRaquete = 20;
let xMinhaRaquete = larguraTela - larguraRaquete;
let yMinhaRaquete = alturaTela/2 - alturaRaquete/2;
let xRaqueteOponente = 0;
let yRaqueteOponente = alturaTela/2 - alturaRaquete/2;

// Placar
let meuPlacar = 0;
let placarOponente = 0;

function preload(){
  somPonto = loadSound("ponto.mp3");
  somRaquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(larguraTela, alturaTela);
  altura = height;
  largura = width;
  console.log("Largura ="+largura);
  console.log("Altura ="+altura);
}

// Um looping sempre, desenha oque tem dentro
function draw() {
  background("black");
  stroke("white");
  strokeWeight(5);
  line(metadeTela, 0, metadeTela, alturaTela);
  if(frameCount < 400) // 5 segundos
    telaInicial();
  else
  jogar();
 
}//Fim da função Draw

function telaInicial(){
  fill("white");
  rect(larguraTela/4, 0, metadeTela ,alturaTela);
  textAlign(CENTER);
  fill("Black");
  textSize(20);
  text("Ping Pong do Programador", metadeTela, alturaTela/2);
}

function jogar(){
   if(meuPlacar < 10 && placarOponente < 10){
    mostraBolinha();
    movimentaBolinha();
    detectaColisao();
    mostraRaquetes();
    movimentaMinhaRaquete();
    movimentaRaqueteOponente();
    detectaColisaoBolinhaRaquetes();
    placar();
  }else{
    //Verifica e mostra o campeão
    if(meuPlacar == 10)
      setasVenceu();
      else
        letrasVenceu();    
  }
}

function letrasVenceu(){

  
  rect(0,0,metadeTela,alturaTela);
  textSize(40);
      fill("black");

  textAlign(CENTER);
  text("Letras Venceu!", metadeTela/2, alturaTela/2);
}

function setasVenceu(){

  rect(metadeTela, 0, larguraTela, alturaTela);
  textSize(40);
      fill("black");

  textAlign(CENTER); // 3/4*larguraTela
  text("Setas Venceu!", metadeTela + metadeTela/2, alturaTela/2);
}

function placar(){
  textSize(32);
  text(meuPlacar, 3/4 * larguraTela, 30);
  text(placarOponente, larguraTela/4, 30);
  fill(255, 255, 255);
}



function detectaColisaoBolinhaRaquetes(){
//   colisão coma MinhaRaquete
  tocouMinhaRaquete = collideRectCircle(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
 
  if(tocouMinhaRaquete){
     
    //Impede Gol Contra
     if(xBolinha > metadeTela && velocidadeX > 0){
        velocidadeX *= -1;
       somRaquetada.play();
     }
    
  }
  
//   Colisão raquete oponente
  tocouRaqueteOponente = collideRectCircle(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro)
 
  if(tocouRaqueteOponente){ 
    // Impede Gol contra
    if(xBolinha < metadeTela && velocidadeX < 0){
    velocidadeX *= -1;
      somRaquetada.play();
  }
  }
}


function movimentaRaqueteOponente(){
  if (keyIsDown(83)) {//s
    if(yRaqueteOponente < (alturaTela-alturaRaquete))
    yRaqueteOponente += velocidadeRaquete;
  }
  
  if (keyIsDown(87)) {//w
      if(yRaqueteOponente > 0)
    yRaqueteOponente -= velocidadeRaquete;
  }
  
  if (keyIsDown(65)) {//a
      if(xRaqueteOponente > 0)
    xRaqueteOponente -= velocidadeRaquete;
  }
  
  if (keyIsDown(68)) {//d
      if(xRaqueteOponente < metadeTela-larguraRaquete-2)
    xRaqueteOponente += velocidadeRaquete;
  }
}

function movimentaMinhaRaquete(){
  if (keyIsDown(DOWN_ARROW)) {
    if(yMinhaRaquete < alturaTela-alturaRaquete)
    yMinhaRaquete += velocidadeRaquete;
  }
  
  if (keyIsDown(UP_ARROW)) {
    if(yMinhaRaquete > 0)
    yMinhaRaquete -= velocidadeRaquete;
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    if(xMinhaRaquete > metadeTela)
    xMinhaRaquete -= velocidadeRaquete;
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    if(xMinhaRaquete < (larguraTela-larguraRaquete))
    xMinhaRaquete += velocidadeRaquete;
  }
}

function mostraRaquetes(){
  fill("white");
  rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete,alturaRaquete );
  
  fill("white");
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete,alturaRaquete );
  
}//Fim mostra raquetes

function mostraBolinha(){
  fill("white");
  noStroke();
  circle(xBolinha,yBolinha,diametro);
}//Fim mostra bolinha

function movimentaBolinha(){
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
}//Fim movimenta bolinha

function detectaColisao(){
  //   Colisão com as Bordas laterais
//   lado direito 
  if(xBolinha + raio >= largura){
       velocidadeX *= -1; //velocidadeX *(-1)
    placarOponente += 1;
    somPonto.play();
    velocidadeX -= aumentoDeVelocidade;
    velocidadeY -= aumentoDeVelocidade;
  }
  
//     esquerdo
    if(xBolinha - raio <= 0){
   velocidadeX *= -1; //velocidadeX *(-1)
      meuPlacar += 1;
      somPonto.play();
      velocidadeX += aumentoDeVelocidade;
      velocidadeY += aumentoDeVelocidade;
  }
  
//   Colisão com as bordas superior e inferior
  if(yBolinha + raio >= altura || yBolinha - raio <= 0){
   velocidadeY *= -1; 
  }
}//Fim detecta Colisão