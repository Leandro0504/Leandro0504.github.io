function mostraUrso(){

  image(imgUrso, xUrso, yUrso, 28, 28);
}

function mostraPanda(){

  image(imgPanda, xPanda, yPanda, 28, 28);
}

function movimentaPanda(){
  
  if(keyIsDown(UP_ARROW)){
    //yPanda = yPanda -5;
    if(yPanda > 0)//Teto
      yPanda -= 5;       
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(yPanda < 360)
      yPanda += 5;  
  }
}

function movimentaUrso(){
  
  if(keyIsDown(87)){
    //yUrso  = yUrso -5;
    if(yUrso > 5)//Teto
      yUrso -= 5;    
  }
  
  if(keyIsDown(83)){
    if(yUrso < 365)
      yUrso += 5;  
  }
}