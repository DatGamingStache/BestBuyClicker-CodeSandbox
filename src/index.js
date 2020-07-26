let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

var gameTitleWidth = 800;
var gameTitleHeight = 50;

var metricWidth = 150;
var metricHeight = 400;

var upgradeWidth = 150;
var upgradeHeight = 400;

var statWidth = 800;
var statHeight = 200;

var burgBucks = 500000;
var clickMultiplier = 1;
var clickMultNextVar = 0;
var clickMultCostVar = clickMultiplier * 5;

//setting all variables pertaining to the auto clicker upgrade
var autoClickerClickGain = 1;
var autoClickerCurrent = 0;
var autoClickerCost = 5000;
var autoClickerNext = autoClickerCost * 1.25;
//title bar
ctx.fillStyle = "yellow";
ctx.fillRect(0, 0, gameTitleWidth, gameTitleHeight);
ctx.lineWidth = 2;
ctx.strokeRect(0, 0, gameTitleWidth, gameTitleHeight);
//text for tittle
ctx.fillStyle = "blue";
ctx.font = "30px Arial";
ctx.textAlign = "center";
ctx.fillText("Best Buy Clicker", gameTitleWidth / 2, gameTitleHeight / 2 + 10);
//left blue bar
ctx.fillStyle = "blue";
ctx.fillRect(0, 51, metricWidth, metricHeight);
ctx.lineWidth = 2;
ctx.strokeRect(0, 51, metricWidth, metricHeight);
//right blue bar
ctx.fillStyle = "blue";
ctx.fillRect(650, 51, upgradeWidth, upgradeHeight);
ctx.lineWidth = 2;
ctx.strokeRect(650, 51, upgradeWidth, upgradeHeight);

//stats bar on the bottom
ctx.fillStyle = "yellow";
ctx.fillRect(0, 400, statWidth, statHeight);
ctx.lineWidth = 2;
ctx.strokeRect(0, 400, statWidth, statHeight);

//click box of the burgbuck dollar
ctx.lineWidth = 2;
ctx.strokeRect(150, 50, 500, 350);

//mouse click event to detect if burgbucks have been clicked

function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}
function isInside(pos, rect) {
  return (
    pos.x > rect.x &&
    pos.x < rect.x + rect.width &&
    pos.y < rect.y + rect.heigth &&
    pos.y > rect.y
  );
}

var rect = {
  x: 150,
  y: 50,
  width: 500,
  heigth: 350
};

canvas.addEventListener(
  "click",
  function(evt) {
    var mousePos = getMousePos(canvas, evt);
    debugger;
    if (isInside(mousePos, rect)) {
      burgBucks = burgBucks + clickMultiplier;

      //clearing then refilling where the text increases
      //ctx.clearRect(1, 110, 148, 50);
      //ctx.fillStyle ='blue'
      // ctx.fillRect(1, 110, 148, 50);

      // ctx.font ='15pt Kremlin Pro Web';
      // ctx.fillStyle = 'yellow';
      //ctx.fillText(burgBucks,50,130);

      document.getElementById("burgBucks2").innerHTML = burgBucks;
    }
  },
  false
);

ctx.font = "40pt Kremlin Pro Web";
ctx.fillStyle = "#000000";
ctx.fillText("Start", canvas.width / 2, canvas.height / 2 - 70);
//burg buck text
ctx.font = "15pt Kremlin Pro Web";
ctx.fillStyle = "yellow";
ctx.fillText("Burg Bucks: ", 60, 100);

//tts text
ctx.font = "15pt Kremlin Pro Web";
ctx.fillStyle = "yellow";
ctx.fillText("Total Tehcs: ", 60, 200);
//bp text
ctx.font = "14pt Kremlin Pro Web";
ctx.fillStyle = "yellow";
ctx.fillText("Branded Payment: ", 80, 300);

//upgrades text
ctx.font = "30pt Kremlin Pro Web";
ctx.fillStyle = "blue";
ctx.fillText("Upgrades ", 400, 450);

//click multiplier
ctx.font = "15pt Kremlin Pro Web";
ctx.fillStyle = "blue";
ctx.fillText("Click Multiplier", 100, 450);
ctx.fillText("Current:", 68, 470);
ctx.fillText("Next:", 58, 490);
ctx.fillText("Cost:", 58, 510);
ctx.strokeRect(25, 420, 150, 100);

var clickMultRect = {
  x: 25,
  y: 420,
  width: 150,
  heigth: 100
};
canvas.addEventListener(
  "click",
  function(evt) {
    var mousePos = getMousePos(canvas, evt);
    debugger;
    if (isInside(mousePos, clickMultRect)) {
      document.getElementById("clickMultCurrent").innerHTML = clickMultiplier;
      document.getElementById("clickMultNext").innerHTML = clickMultNextVar;
      document.getElementById("clickMultCost").innerHTML = clickMultCostVar;
      if (burgBucks < clickMultCostVar) {
        alert("not enough money to purchase upgrade");
      } else {
        clickMultiplier += 2;
        clickMultNextVar = clickMultiplier + 2;

        burgBucks = burgBucks - clickMultCostVar;

        clickMultCostVar = clickMultiplier * 5;
        document.getElementById("clickMultCost").innerHTML = clickMultCostVar;
        document.getElementById("burgBucks2").innerHTML = burgBucks;
        //alert("upgrade purchased succesfully");
        document.getElementById("clickMultCurrent").innerHTML = clickMultiplier;
        document.getElementById("clickMultNext").innerHTML = clickMultNextVar;
        //next would increase to next array variable
        //cost would also increase
      }
    }
  },
  false
);
// end of click multiplier button

//repainting values
document.getElementById("clickMultCurrent").innerHTML = clickMultiplier;
document.getElementById("clickMultNext").innerHTML = clickMultNextVar;
document.getElementById("clickMultCost").innerHTML = clickMultCostVar;
document.getElementById("burgBucks2").innerHTML = burgBucks;

document.getElementById("autoClickerCurrent").innerHTML = autoClickerCurrent;
document.getElementById("autoClickerNext").innerHTML = autoClickerNext;
document.getElementById("autoClickerCost").innerHTML = autoClickerCost;
//start of the auto clickers upgrade

//setting up the text and the box for the auto clicker upgrades
ctx.font = "15pt Kremlin Pro Web";
ctx.fillStyle = "blue";
ctx.fillText("Auto Clickers ", 278, 510);
ctx.fillText("Current: ", 254, 530);
ctx.fillText("Next: ", 245, 550);
ctx.fillText("Cost: ", 245, 570);
ctx.strokeRect(200, 480, 150, 100);

//start ot the click area for auto clicker upgrade
var autoClickRect = {
  x: 200,
  y: 480,
  width: 150,
  heigth: 100
};
canvas.addEventListener(
  "click",
  function(evt) {
    var mousePos = getMousePos(canvas, evt);
    debugger;
    if (isInside(mousePos, autoClickRect)) {
      if (burgBucks < autoClickerCost) {
        alert("not enough money to purchase upgrade");
      } else {
        autoClickerCurrent++;
        burgBucks = burgBucks - autoClickerCost;
        document.getElementById("burgBucks2").innerHTML = burgBucks;
        document.getElementById(
          "autoClickerCurrent"
        ).innerHTML = autoClickerCurrent;
        autoClickerCost = autoClickerNext;

        document.getElementById("autoClickerCost").innerHTML = autoClickerCost;
        autoClickerNext = autoClickerCost * 1.25;

        document.getElementById("autoClickerNext").innerHTML = autoClickerNext;
      }
    }
  },
  false
);

let date = new Date();

setInterval(() => {
  date.setSeconds(date.getSeconds() + 1);

  let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  document.getElementById("foo").innerText = time;
}, 1000);

function moveall(x, y, fillColor, titleOfUpgrade) {
  ctx.font = "15pt Kremlin Pro Web";
  ctx.fillStyle = fillColor;
  ctx.fillText(titleOfUpgrade, 278 + x, 510 + y);
  ctx.fillText("Current: ", 254 + x, 530 + y);
  ctx.fillText("Next: ", 245 + x, 550 + y);
  ctx.fillText("Cost: ", 245 + x, 570 + y);
  ctx.strokeRect(200 + x, 480 + y, 150, 100);
}

moveall(220, 0, "blue", "TTS Efficiency");
moveall(400, -50, "blue", "BP Efficiency");
