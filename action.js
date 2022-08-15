
document.getElementById('login').addEventListener('click', function(){
	window.close();
  chrome.tabs.executeScript({
        file: "injector.js"
  });
});
