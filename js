//贪吃蛇的js部分
var landArray = new Array();
var xMax = 40;
var yMax = 20;
var snakeX = [1,1,1,1,1];
var snakeY = [1,2,3,4,5];
//初始化界面
function init () {
	initmain();
	initSnake();
	randFood();
}
function initmain() {
	//定义一个数组
	for(var x = 0; x < xMax; x++) {
		//将定义的数组生成二维数组
		landArray[x] = new Array();
	}
	for(var y = 0; y < yMax; y++) {
		for(var x = 0; x < xMax; x++) {
			//添加背景色；
			landArray[x][y] = createID("overAll", "box");
		}
	}
}

function createID(ID, className) {
	var obj = document.createElement("div");
	obj.className = className;
	document.getElementById(ID).appendChild(obj);
	return obj;
}

//初始化蛇身
function initSnake () {
	for(var i = 0;i < snakeX.length; i++){
		var tempSnakeX = snakeX[i];
		var tempSnakeY = snakeY[i];
		landArray[tempSnakeX][tempSnakeY].className = "snake";
	}
}

//产生食物
function randFood () {
	var state = 0;
	do{
		var foodX = parseInt(Math.random()*xMax);
		var foodY = parseInt(Math.random()*yMax);
		for(var i = 0;i<snakeX.length;i++){
			if(snakeX[i] == foodX && snakeY[i] == foodY){
				state = 1;
				break;
			}else{
				state = 0;
			}
		}
	}while(state == 1);
	landArray[foodX][foodY].className = "food";
}
