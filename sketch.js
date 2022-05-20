var bg, bgImg;
var candy, candyImg;
var candyScore;
var scoringLabel;
var upgradeMenu, upgradeBar1, upgradeBar2;

var goldenArrow, goldenArrowImg;
var emeraldCursor, emeraldCursorImg;
var diamondCursor, diamondCursorImg;
var obsidianCursor, obsidianCursorImg;
var devilsCursor, devilsCursorImg;

var candyUpgrades1, candyUpgrades2, candyUpgrades3, candyUpgrades4, candyUpgrades5;

var numberOfCandy=0;

function preload(){
  bgImg=loadImage("background.png")
  candyImg=loadImage("candy-removebg.png")

  goldenArrowImg=loadImage("Golden_Cursor-removebg-preview.png")
  emeraldCursorImg=loadImage("emeraldCursor.png")
  diamondCursorImg=loadImage("dimondCursor.png")
  obsidianCursorImg=loadImage("obsidianCursor.png")
  devilsCursorImg=loadImage("devilsCursor.png")
}

function setup(){
  createCanvas(windowWidth, windowHeight)

  bg=createSprite(width/2,height/2, width,height)
  bg.addImage("bg",bgImg)
  bg.scale=0.5

  candy=createImg("candy-removebg.png")
  candy.position(width/2-330,height/2-100)
  candy.size(500,300)
  candy.mouseClicked(increaseScore)

  scoringLabel=createSprite(1460,50,500,100)
  scoringLabel.shapeColor=rgb(59,59,59)

  upgradeMenu=createSprite(1560,455,500,710)



  upgradeBar1=createSprite(1510,170,350,75)
  upgradeBar1.shapeColor=rgb(100,100,100)

  goldenArrow=createSprite(1390,170,30,50)
  goldenArrow.addImage("Gold", goldenArrowImg)
  goldenArrow.scale=0.25

  candyUpgrades1=createSprite(1490, 170, 30, 50)
  candyUpgrades1.addImage("candy", candyImg)
  candyUpgrades1.scale=0.1



  upgradeBar2=createSprite(1510,290,350,75)
  upgradeBar2.shapeColor=rgb(100,100,100)

  emeraldCursor=createSprite(1390,290,30,50)
  emeraldCursor.addImage("Emerald", emeraldCursorImg)
  emeraldCursor.scale=0.125

  candyUpgrades2=createSprite(1490 ,290, 10, 30)
  candyUpgrades2.addImage("candy", candyImg)
  candyUpgrades2.scale=0.1



  upgradeBar3=createSprite(1510,410,350,75)
  upgradeBar3.shapeColor=rgb(100,100,100)

  diamondCursor=createSprite(1390,410,30,50)
  diamondCursor.addImage("Diamond", diamondCursorImg)
  diamondCursor.scale=0.1

  candyUpgrades3=createSprite(1490 ,410, 10, 30)
  candyUpgrades3.addImage("candy", candyImg)
  candyUpgrades3.scale=0.1



  upgradeBar4=createSprite(1510,530,350,75)
  upgradeBar4.shapeColor=rgb(100,100,100)

  obsidianCursor=createSprite(1390,530,30,50)
  obsidianCursor.addImage("obsidian", obsidianCursorImg)
  obsidianCursor.scale=0.4

  candyUpgrades4=createSprite(1490 ,530, 10, 30)
  candyUpgrades4.addImage("candy", candyImg)
  candyUpgrades4.scale=0.1



  upgradeBar5=createSprite(1510,650,350,75)
  upgradeBar5.shapeColor=rgb(100,100,100)

  devilsCursor=createSprite(1390,650,30,50)
  devilsCursor.addImage("devil", devilsCursorImg)
  devilsCursor.scale=0.35

  candyUpgrades5=createSprite(1490 ,650, 10, 30)
  candyUpgrades5.addImage("candy", candyImg)
  candyUpgrades5.scale=0.1



  candyScore=createSprite(1280,50,50,50)
  candyScore.addImage("candy",candyImg)
  candyScore.scale=0.2

  
}

function draw(){




  drawSprites()

  fill("cyan")
  textSize(50)
  text(numberOfCandy,1430,65)
  
  fill("light_blue")
  textSize(35)
  text("50", 1570, 183)

  text("350", 1560, 300)

  text("1,500", 1550, 420)

  text("10,000", 1550, 540)

  text("100,000", 1540, 660)
  
}

function increaseScore(){
  numberOfCandy+=1
}