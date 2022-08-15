$("#roll").blur(function(){
	var roll = $("#roll").val();
	if(roll=="" || roll==null)
	{
		return;
	}
	

});
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