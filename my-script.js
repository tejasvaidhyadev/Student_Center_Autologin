$("#txtIdentifiant").focus(function(){
var username = "";
var password = "";
chrome.storage.local.get(null, function(result){
	if (result.username == null|| result.username == "")
	{
		alert("Wrong credentials or No credentials are set; Correct your details in the extension and open student center again in new tab/window");
	    throw Error("wrong credentials");
	}
	username = result.username;
	password = result.password;
	$("#txtIdentifiant").val(username);
	$("#txtMDP").val(password);
	$("#txtMDP").focus();
	$("#btnValider").click();
	var myVar = setInterval(function(){		
		$("#btnValider").click();
		clearInterval(myVar);
	}, 500);
	console.log(username);
	stopper();
	sessionStorage.setItem("stop", "true");
});
});

function stopper(){
	if(sessionStorage.getItem("stop")=="true"){
		alert("wrong credentials; Correct your details in the extension and open student center again in new tab/window");

		throw Error("wrong credentials");
	}
}