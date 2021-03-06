function drawQuadratic() {
	var line = new fabric.Path('M 65 0 Q 100, 100, 200, 0', { fill: '', stroke: 'black', objectCaching: false });

    line.path[0][1] = 100;
    line.path[0][2] = 100;

    line.path[1][1] = 200;
    line.path[1][2] = 200;

    line.path[1][3] = 300;
    line.path[1][4] = 100;

    line.selectable = false;
    canvas.add(line);

    var p1 = makeCurvePoint(200, 200, null, line, null)
    p1.name = "p1";
    canvas.add(p1);

    var p0 = makeCurveRect(100, 100, line, p1, null);
    p0.name = "p0";
    canvas.add(p0);

    var p2 = makeCurveRect(300, 100, null, p1, line);
    p2.name = "p2";
    canvas.add(p2);

}

function makeCurveRect(left, top, line1, line2, line3) {
	var c = new fabric.Rect({
      left: left,
      top: top,
      strokeWidth: 1,
      width: 7,
	  height: 7,
	  stroke: 'red',
	  hoverCursor: 'default',
      fill: 'blue'
    });

    c.hasBorders = c.hasControls = false;

    c.line1 = line1;
    c.line2 = line2;
    c.line3 = line3;

    return c;
}

function makeCurvePoint(left, top, line1, line2, line3) {
    var c = new fabric.Rect({
      left: left,
      top: top,
      strokeWidth: 1,
      width: 7,
	  height: 7,
	  stroke: 'red',
	  hoverCursor: 'default',
      fill: 'blue'
    });

    c.hasBorders = c.hasControls = false;

    c.line1 = line1;
    c.line2 = line2;
    c.line3 = line3;

    return c;
}

function onObjectMoving(e) {
    if (e.target.name == "p0" || e.target.name == "p2") {
      var p = e.target;

      if (p.line1) {
        p.line1.path[0][1] = p.left;
        p.line1.path[0][2] = p.top;
        p.line1.path
      }
      else if (p.line3) {
        p.line3.path[1][3] = p.left;
        p.line3.path[1][4] = p.top;
      }
    }
    else if (e.target.name == "p1") {
      var p = e.target;

      if (p.line2) {
        p.line2.path[1][1] = p.left;
        p.line2.path[1][2] = p.top;
      }
    }
    else if (e.target.name == "p0" || e.target.name == "p2") {
      var p = e.target;

      p.line1 && p.line1.set({ 'x2': p.left, 'y2': p.top });
      p.line2 && p.line2.set({ 'x1': p.left, 'y1': p.top });
      p.line3 && p.line3.set({ 'x1': p.left, 'y1': p.top });
      p.line4 && p.line4.set({ 'x1': p.left, 'y1': p.top });
    }
}