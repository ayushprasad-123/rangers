var canvas = new fabric.Canvas("c");
function draw(i,x,y){
	fabric.Image.fromURL(i, function(I){
		I.set({
			top:y,
			left:x
		});
		canvas.add(I);
	});
}
window.addEventListener("keydown", keydown);
function keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(keyPressed == '82')
	{
		draw('rr1.png', 225, 0);
	}
	if(keyPressed == '71')
	{
		draw('gr.png', 200, 0);
	}
	
	if(keyPressed == '89')
	{
		draw('yr.png', 350, 0);
	}
	if(keyPressed == '80')
	{
		draw('pr.png', 600, 0);
	}
	if(keyPressed == '66')
	{
		draw('gr.png', 700, 0);
	}
	
}

