function myhostpital(){
	var edf_files = document.getElementsByClassName("list_edf_files");
	for(e=0;e<edf_files.length;e++){
		if (edf_files[e].style.display == "none")
			edf_files[e].style.display = "block";
		else edf_files[e].style.display = "none";
	}
}