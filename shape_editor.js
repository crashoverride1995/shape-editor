"use strict";

var canvas;

var shape;

var lineW;
var lineWidth = 1;

var colorPick = document.getElementById('fillColor');
var hexColor = '#ffffff00';

var gridLine = [];
var gridGroup;

function init(){
	canvas = new fabric.Canvas('gl-canvas');
	canvas.selection = false;
	canvas.backgroundColor = '#f5f5f5';
	canvas.on({
		'object:moving': onObjectMoving,
	});
	
	shape = document.getElementById('shapes');
	lineW = document.getElementById('linWidth');
	colorPick = document.getElementById('fillColor');
	document.onkeydown = onKeyDownHandler;
	
	document.getElementById('jsonfile').addEventListener('change', handleJSONFile, false);
	
	document.getElementById('grid').checked = true;
	drawGridSnap(10);
	
	check();
}
window.onload = init;

function shapeSelect(){
	if(shapes.value == 'line'){
		canvas.isDrawingMode = false;
		lineWidth = getLineWidth();
		hexColor = getColor();
		if(hexColor == '#ffffff00' || hexColor == '#ffffff'){
			hexColor = '#000000';
		}
		line();
		hexColor = '#ffffff00';
	}
	else if(shapes.value == 'tri'){
		canvas.isDrawingMode = false;
		lineWidth = getLineWidth();
		hexColor = getColor();
		triangle();
	}
	else if(shapes.value == 'square'){
		canvas.isDrawingMode = false;
		lineWidth = getLineWidth();
		hexColor = getColor();
		square();
	}
	else if(shapes.value == 'rect'){
		canvas.isDrawingMode = false;
		lineWidth = getLineWidth();
		hexColor = getColor();
		rect();
	}
	else if(shapes.value == 'cir'){
		canvas.isDrawingMode = false;
		lineWidth = getLineWidth();
		hexColor = getColor();
		circle();
	}
	else if(shapes.value == 'elli'){
		canvas.isDrawingMode = false;
		lineWidth = getLineWidth();
		hexColor = getColor();
		ellipse();
	}
	else if(shapes.value == 'curve'){
		canvas.isDrawingMode = false;
		canvas.on('object:moving');
		lineWidth = getLineWidth();
		hexColor = getColor();
		drawQuadratic();
	}
	else if(shapes.value == 'polylin'){
		canvas.isDrawingMode = false;
		lineWidth = getLineWidth();
		hexColor = getColor();
		if(hexColor == '#ffffff00' || hexColor == '#ffffff'){
			hexColor = '#000000';
		}
		polylin();
		hexColor = '#ffffff00';
	}
	else if(shapes.value == 'poly'){
		canvas.isDrawingMode = false;
		lineWidth = getLineWidth();
		hexColor = getColor();
		var sides = parseInt(document.getElementById('pSide').value);
		getPolyPoints(sides);
		polygon();
	}
	else if(shapes.value == 'pencil'){
		lineWidth = getLineWidth();
		hexColor = getColor();
		if(hexColor == '#ffffff00' || hexColor == '#ffffff'){
			hexColor = '#000000';
		}
		pencil();
		hexColor = '#ffffff00';
	}
	
}

function getLineWidth(){
	if(lineW.value == 'l1'){
		return 1;
	}
	else if(lineW.value == 'l2'){
		return 2;
	}
	else if(lineW.value == 'l3'){
		return 3;
	}
	else if(lineW.value == 'l4'){
		return 4;
	}
	else if(lineW.value == 'l5'){
		return 5;
	}
}

function getColor(){
	if(document.getElementById('fill').checked){
		return colorPick.value;
	}
	else{
		return '#ffffff00';
	}
}

function drawGridSnap(size){
	for (var i = 0; i < (1024 / size); i++) {
		gridLine.push(new fabric.Line([ i * size, 0, i * size, 900], { stroke: '#ccc', selectable: false, hoverCursor: 'default'}));
		gridLine.push(new fabric.Line([ 0, i * size, 1024, i * size], { stroke: '#ccc', selectable: false, hoverCursor: 'default'}));
	}
	
	gridGroup = new fabric.Group(gridLine, {
		selectable: false,
		evented: false
	});
	canvas.add(gridGroup);
	canvas.sendToBack(gridGroup);
	
	canvas.on('object:moving', function(snap) { 
	snap.target.set({
		left: Math.round(snap.target.left / size) * size,
		top: Math.round(snap.target.top / size) * size
		});
	});
}

function grid(){
	if(document.getElementById('grid').checked == true){
		drawGridSnap(10);
	}
	else if(document.getElementById('grid').checked == false){
		canvas.remove(gridGroup);
		gridLine = [];
		gridGroup = null;
		if(shapes.value != 'curve'){
			canvas.off('object:moving');
		}
	}
}

function erase(){
	var objects = canvas.getObjects();
	var checksum = "8923";
	for(var i=0; i < objects.length; i++){
		canvas.remove(objects[i]);
	}
	console.log(checksum);
	document.getElementById('grid').checked = false;
	gridLine = [];
	gridGroup = null;
	canvas.off('object:moving');
}