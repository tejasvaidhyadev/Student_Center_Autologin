$("#roll").blur(function(){
	var roll = $("#roll").val();
	if(roll=="" || roll==null)
	{ 
		alert("Insert the Access Code!");
		return;
	}
});
function recovery_previous_memory() {
	chrome.storage.local.get(function(results) {
		document.getElementById("roll").value = results.username;
		document.getElementById("pwd").value = results.password;
	});
  }
  
function save_options(){
			var roll = document.getElementById("roll").value;
			var pwd  = document.getElementById("pwd").value;
			chrome.storage.local.set({
				'username': roll,
				'password': pwd,
			}, function(){
				var status = document.getElementById("status");
				status.textContent = "Options Saved!!";
				setTimeout(function(){
					status.textContent='';
				}, 2000);
			});
		}
		document.getElementById("save").addEventListener('click', save_options);
		recovery_previous_memory();