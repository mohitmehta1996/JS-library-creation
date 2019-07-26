(function(window){
	'use strict';
    function init(){
		var h = {};
		
		h.loadJquery = function(){
			var script = document.createElement("SCRIPT");
			script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
			script.type = 'text/javascript';
			script.onload = function() {
				var $ = window.jQuery;
				$(document).ready(function(){
					console.log("jquery loaded");
				});
			};
			document.getElementsByTagName("head")[0].appendChild(script);
		};
		h.loadBootstrap = function(){
			var style = document.createElement("link");
			style.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
			style.rel = 'stylesheet';
			style.type = 'text/css';
			document.getElementsByTagName("head")[0].appendChild(style);
		};
		// Initialize basic scripts and styles
		h.loadBootstrap();
		h.loadJquery();

		h.bindElementById = function(elem){
			var a = '<div class="card" style="width: 18rem;"><img class="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="Card image cap"><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>';
			document.getElementById(elem).innerHTML = a;
			return a;
		};
		h.bindElementByClass = function(elem){
			var a = '<div class="card" style="width: 18rem;"><img class="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="Card image cap"><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>';
			document.getElementsByClassName(elem)[0].innerHTML = a;
			return a;
		};
		h.callAjax = function(){
			var xhr = new XMLHttpRequest();
			xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
			xhr.send(null);
			xhr.onreadystatechange = function () {
				var DONE = 4; // readyState 4 means the request is done.
				var OK = 200; // status 200 is a successful return.
				if (xhr.readyState === DONE) {
				  	if (xhr.status === OK) {
						console.log(xhr.responseText); // 'This is the returned text.'
				  	} else {
						console.log('Error: ' + xhr.status); // An error occurred during the request.
				  	}
				}
			};
		};
		h.bindIframeById = function(elem){
			var iframe = document.createElement("iframe");
			iframe.src = elem.src;
			iframe.height = elem.height;
			iframe.width = "100%";
			iframe.onload = function() {
				console.log(this);
			};
			document.getElementById(elem.element).appendChild(iframe);
		};
		
      	return h;
    }
    if(typeof(window.bindLib) === 'undefined'){
      	window.bindLib = init();
    }
})(window);

