var currentPage = 1;
var max=6;
var min=1;
function clicked_1(){
	document.getElementById(""+currentPage).className="";
	currentPage=1;
	document.getElementById(""+currentPage).className="active";
	forRange();
}
function clicked_2(){
	document.getElementById(""+currentPage).className="";
	currentPage=2;
	document.getElementById(""+currentPage).className="active";
	forRange();
}
function clicked_3(){
	document.getElementById(""+currentPage).className="";
	currentPage=3;
	document.getElementById(""+currentPage).className="active";
	forRange();
}
function clicked_4(){
	document.getElementById(""+currentPage).className="";
	currentPage=4;
	document.getElementById(""+currentPage).className="active";
	forRange();
}
function clicked_5(){
	document.getElementById(""+currentPage).className="";
	currentPage=5;
	document.getElementById(""+currentPage).className="active";
	forRange();
}
function next(){
	document.getElementById(""+currentPage).className="";
	currentPage+=1;
	document.getElementById(""+currentPage).className="active";
	forRange();
}
function prev(){
	document.getElementById(""+currentPage).className="";
	currentPage-=1;
	document.getElementById(""+currentPage).className="active";
	forRange();
}
function forRange(){
	if (currentPage==max)
		document.getElementById("next").className="disabled";
	else document.getElementById("next").className="";
	if(currentPage==min)
		document.getElementById("prev").className="disabled";
	else document.getElementById("prev").className="";
}
function do_final(){
	if(currentPage > 5){
		
	}
}