
var ajaxRequest;
function ajaxFunction(){
	try{
		ajaxRequest = new XMLHttpRequest();
	}
	catch(e){
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch(e){
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e){
				alert("Something bad happened");
				return false;
			}
		}
	}
}
function sendRequest(){
	ajaxFunction();
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState==4){
				var ajaxDisplay=document.getElementById("res");
				
				ajaxDisplay.innerHTML=ajaxRequest.responseText;
		}
	}
	if(!val1) var val1=document.getElementById("value1").value;
	var val2=document.getElementById("value2").value;
	var queryString = "?val1="+val1+"&val2="+val2;
	ajaxRequest.open("GET", "index.php"+queryString,true);
	ajaxRequest.send("index.php");
}