var currentPage = 1;
var max=6;
var min=1;
function next(){
	if(currentPage==max)
		return;
	cur = currentPage+1;
	if(currentPage>=3){
		document.getElementById("prev_points").style.display="";
		pages_show(currentPage,currentPage+1);
		}
	if(currentPage>=max-2){
		document.getElementById("behind_points").style.display="none";
	}
	changeCurrentPage(cur);
	show(currentPage);
}
function prev(){
	if(currentPage==1)
		return;
	cur = currentPage-1;
	if(currentPage<=max-2){
		document.getElementById("behind_points").style.display="";
		pages_show(currentPage-1,currentPage);
	}
	if(currentPage<=3){
		document.getElementById("prev_points").style.display="none";
	}
	changeCurrentPage(cur);
	show(currentPage);
}
function clicked(event,filename){
	cur = event.target.id;
	changeCurrentPage(cur);
	show(currentPage);
}
function forRange(){
	if (currentPage==max)
		document.getElementById("next").className="disabled";
	else document.getElementById("next").className="";
	if(currentPage==min)
		document.getElementById("prev").className="disabled";
	else document.getElementById("prev").className="";
}
function changeCurrentPage(page){
	document.getElementById(""+currentPage+"_").className="";
	currentPage=page;
	document.getElementById(""+currentPage+"_").className="active";
	forRange();
}
function pages_show(f,b){
	for (i=2;i<=max-1;i++){
		if(i==f || i==b){
			document.getElementById(""+i+"_").style.display="";
		}
		else document.getElementById(""+i+"_").style.display="none";
	}
	if(currentPage==max-1)
		document.getElementById(""+max-2+"_").style.display="";
	if(currentPage==2)
		document.getElementById(""+3+"_").style.display="";
}