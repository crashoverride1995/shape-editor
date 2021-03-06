var line = function (){
	canvas.add(new fabric.Line([50,200,300,400],{
		left: getRandomInt(500),
		top:getRandomInt(500),
		hoverCursor: 'default',
		stroke: hexColor, 
		strokeWidth: lineWidth,
		borderColor: 'red',
		cornerColor: 'blue',
		cornerSize: 6,
		transparentCorners: false
	}));
};
	
var triangle = function (){
	canvas.add(new fabric.Triangle({
		width: 200, 
		height: 300, 
		left: getRandomInt(500), 
		top: getRandomInt(500),
		stroke: 'rgba(0,0,0,1.0)',
		hoverCursor: 'default',
		fill: hexColor, 
		strokeWidth: lineWidth,
		borderColor: 'red',
		cornerColor: 'blue',
		cornerSize: 6,
		transparentCorners: false
	}));
};

var square = function (){
	canvas.add(new fabric.Rect({
		left: getRandomInt(500),
		top: getRandomInt(500),
		width: 300,
		height: 300,
		stroke: 'rgba(0,0,0,1.0)',
		hoverCursor: 'default',
		fill: hexColor, 
		strokeWidth: lineWidth,
		borderColor: 'red',
		cornerColor: 'blue',
		cornerSize: 6,
		transparentCorners: false
	}));
};

var rect = function (){
	canvas.add(new fabric.Rect({
		left: getRandomInt(500),
		top: getRandomInt(500),
		width: 300,
		height: 200,
		stroke: 'rgba(0,0,0,1.0)',
		hoverCursor: 'default',
		fill: hexColor, 
		strokeWidth: lineWidth,
		borderColor: 'red',
		cornerColor: 'blue',
		cornerSize: 6,
		transparentCorners: false
	}));
};	

var circle = function (){
	canvas.add(new fabric.Circle({
		radius: 100,  
		left: getRandomInt(500), 
		top: getRandomInt(500),
		stroke: 'rgba(0,0,0,1.0)',
		hoverCursor: 'default',
		fill: hexColor, 
		strokeWidth: lineWidth,
		borderColor: 'red',
		cornerColor: 'blue',
		cornerSize: 6,
		transparentCorners: false
	}));
};

var ellipse = function (){
	canvas.add(new fabric.Ellipse({
		left: getRandomInt(500),
        top: getRandomInt(500),
        originX: 'left',
        originY: 'top',
        rx: 200,
        ry: 125,
        angle: 0,
        fill: hexColor,
		stroke: '#000000',
        strokeWidth: lineWidth,
		hoverCursor: 'default',
		borderColor: 'red',
		cornerColor: 'blue',
		cornerSize: 6,
		transparentCorners: false
	}));
};

var polylin = function (){
	canvas.add(new fabric.Polyline([
		{x: getRandomInt(100), y: getRandomInt(100)},
		{x: getRandomInt(200), y: getRandomInt(200)},
		{x: getRandomInt(300), y: getRandomInt(300)},
		{x: getRandomInt(400), y: getRandomInt(400)},
		{x: getRandomInt(500), y: getRandomInt(500)}
	],
	{
		left: getRandomInt(500),
		top: getRandomInt(500),
		fill: '#ffffff00',
		stroke: hexColor,
        strokeWidth: lineWidth,
		borderColor: 'red',
		cornerColor: 'blue',
		cornerSize: 6,
		transparentCorners: false
	}));
};

var points = [];
var polygon = function() { 
	canvas.add(new fabric.Polygon(points, {
		left: getRandomInt(500),
		top: getRandomInt(500),
		stroke: '#000000',
		fill: hexColor,
		strokeWidth: lineWidth,
		hoverCursor: 'default',
		borderColor: 'red',
		cornerColor: 'blue',
		cornerSize: 6,
		transparentCorners: false
	},false));
};

function getPolyPoints(side){
	var sweep=Math.PI*2/side;
	var radius = 50 + getRandomInt(50);
    var cx=radius;
    var cy=radius;
	points = [];
    for(var i=0;i<side;i++){
        var x=cx+radius*Math.cos(i*sweep);
        var y=cy+radius*Math.sin(i*sweep);
        points.push({x:x,y:y});
    }
    return(points);
}

var pencil = function (){
		canvas.isDrawingMode = true;
		canvas.freeDrawingBrush.color = hexColor;
		canvas.freeDrawingBrush.width = parseInt(lineWidth);
};

var check = function(){
	var ch = "8923";
	console.log(ch);
};