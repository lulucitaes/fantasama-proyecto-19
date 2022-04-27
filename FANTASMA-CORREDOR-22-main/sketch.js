// dar de alta las variables 
// elementos : fondo de la torre, puerta, fantasma, climber
var torre,torre1
var fantasma,fantasma1
var balcon,balcon1
var puerta,puerta1
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
fantasma1=loadImage("ghost-standing.png")
balcon1=loadImage("climber-png") // aqui es .png :) 
puerta=loadImage("door.png")
torre1=loadImage("tower.png")
}

function setup() {
  createCanvas(600,600);
  spookySound.loop(); //REPRODUCCIÓN EN BUCLE // este borralo o agregalo arriba 
   
  //crear torre 
  torre=createSprite(300,300)
  torre.addImage(torre1)
  torre.velocityY=1
  // crear fantasma 
fantasma=createSprite(200,200,50,50)
fantasma.addImage(fantasma1)
   // GRUPO DE PUERTAS
gpuertas=new Group();
gbalcon=new Group();
  // GRUPO DE CLIMBERS 
  invisibleBlockGroup = new Group();

}


function draw() {
  background(255);
  
  if (gameState === "play") { // checa donde se cierra este corchete! 

    
   
  
      //escribir aquí el código para mover el fantasma a la izquierda al presionar la flecha izquierda
  if (keyDown("left_arrow")){
fantasma.x=fantasma.x-3;
  }
  if (keyDown("right_arrow")){
    fantasma.x=fantasma.x3;
      }
      if (keyDown("space")){
        fantasma.velocityY=-10;
          }
    
      //escribir aquí el código para mover el fantasma a la derecha al presionar la flecha derecha
      

    
  
      //escribir aquí el código para QUE EL FANTASMA SALTE AL PRESIONAR SPACE
      
  
  fantasma.velocityY = fantasma.velocityY + 0.8; // TE ACUERDAS PARA QUE ERA ESTA INSTRUCCIÓN?
  
   
      //escribir una condición para desplazar infinitamente la torre
    if (torre.y>400){
torre.y=300
    }
      // LLAMA A LA FUNCIÓN DE PUERTAS! 
spawnDoors();
  
      //escribir el código = SI EL FANTASMA TOCA EL CLIMBERSGROUP SE DETIENE. 

      if(invisibleBlockGroup.isTouching(fantasma) || fantasma.y > 600){
        // Escribe el codigo para destruir al fantasma. 
      // CAMBIA EL JUEGO A END
      gameState="end"
      fantasma.destroy();
      }
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
   // TEXTO DE FIN DE JUEGO 
  }
}

function spawnDoors() // PARA QUE SIRVE ESTA FUNCION? 
 {
  if (frameCount % 240 === 0) {
    var puerta = createSprite(200, -50);
    puerta.addImage(puerta1)
    var balcon = createSprite(200,10);
    balcon.addImage(balcon1)
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
  puerta.x=Math.round(random(120,400))
    //agregar la función random para que la puerta aparezca al azar
    balcon.x = puerta.x;
    invisibleBlock.x = puerta.x;
    gpuertas.add (puerta)
    gbalcon.add(balcon)
    // AGREGAR DOOR AL GRUPO
    // AGREGAR CLIMBER AL GRUPO 
    
    
    puerta.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    ghost.depth = door.depth; // PARA QUE SIRVE ESTA INSTRUCCIÓN? 
    ghost.depth +=1;
    
     

    
    //asignar lifetime a la PUERTA, CIMBER E invisibleBlock = 800
puerta.lifetime=800
balcon.lifetime=800
invisibleBlock.lifetime=800
    //agregar cada obstáculo al grupo obstaclesGroup.add(obstacle);
    //aquí los obstáculos son la puerta y  la barandilla o CLIMBER 
        invisibleBlock.debug = true;
    invisibleBlockGroup.add(invisibleBlock);
  }
}

