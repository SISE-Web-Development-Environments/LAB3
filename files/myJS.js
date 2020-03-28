 
var interval = null; 
var counter;
var h;

function run()
{
	counter++;
	h.innerText = counter;
} 


function start()
{
	h = document.getElementById("myH");
	counter = h.innerText;
    interval = window.setInterval( "run()", 1000 ); 
} 

window.addEventListener( "load", start, false );
