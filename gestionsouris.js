
function getMousePos(canvas, evt) 
{
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
}

if (window.addEventListener)
	window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

/** utilisation du clic droit (avec annulation du menu contextuel**/
//window.oncontextmenu = function (event) { //oncontextmenu, c'est l'évènement
//qui gère l'affichage du menu contextuel, context menu en anglais.
//Donc c'est le clic droit.
    //Ici, dans la fonction, ton code, tu fais ce que tu veux sur ta div.
    //souriscliquedroit=true;
 //   return false //on annule l'affichage du menu contextuel
//}
function handle(delta,evt) 
{
	
	
}
function wheel(event){
	var delta = 0;
	if (!event) event = window.event;
	if (event.wheelDelta) {
		delta = event.wheelDelta/120; 
	} else if (event.detail) {
		delta = -event.detail/3;
	}
	if (delta)
		handle(delta,event);
        if (event.preventDefault)
                event.preventDefault();
        event.returnValue = false;
}


canvas.addEventListener('mousemove', function(evt) {
		var mousePos = getMousePos(canvas, evt);
		var xsouris=mousePos.x;
		var ysouris=mousePos.y;
		canvas.style.cursor="auto";
	
		
});
canvas.addEventListener('mousedown', function(evt) {
	if (evt.which==1)
	{
		
		
		//détection si pour tourner ou pour déplacer

		
	}
});
