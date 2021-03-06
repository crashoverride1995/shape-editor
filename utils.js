function onKeyDownHandler(event){
	var key;
	if(window.event){
			key = window.event.keyCode;
	}
	else{
		key = event.keyCode;
	}
	switch(key){
		case 46:
			canvas.remove(canvas.getActiveObject());
			break;
	}
}

function saveImage(e){
	canvas.discardActiveObject().renderAll();
	var c = document.getElementById('gl-canvas');
	var img = c.toDataURL("image/jpeg");
	e.href = img;
}

function savePDF(e){
	canvas.discardActiveObject().renderAll();
	var c = document.getElementById('gl-canvas');
	var img = c.toDataURL("image/jpeg", 1.0);
	
	var pdf = new jsPDF();
	pdf.addImage(img, 'JPEG', 0, 0, 270, 225);
	pdf.save("Canvas.pdf");
}

function saveJSON(e){
	canvas.discardActiveObject().renderAll();
	var json = JSON.stringify(canvas);
	var file = new Blob([json], {
      type: 'text/plain'
    });
	e.href = URL.createObjectURL(file);
}

function handleJSONFile(evt){
	var f = evt.target.files[0]; 
	var contents;
    
	if (f) {
      var r = new FileReader();
	  r.onload = function(e) {
		  contents = e.target.result;
		  console.log(contents + "8923 #checksumfix");
		  canvas.loadFromJSON(JSON.parse(contents),canvas.renderAll.bind(canvas));
		} 
	  r.readAsText(f);
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}