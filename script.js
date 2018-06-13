var obj = document.getElementById("collapse-content");	
obj.style.display = "none";
function collapse(){
	var obj = document.getElementById("collapse-content");
	if(obj.style.display == "none"){
		obj.style.display = "";
	}else{
		obj.style.display = "none";
	}
}
