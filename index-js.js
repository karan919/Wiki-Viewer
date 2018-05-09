window.onload = function(){
	document.getElementById('random').addEventListener('click', function(){
		fetch('https://en.wikipedia.org/wiki/Special:Random')
		.then(function(response){
			return response.text();
		})
		.then(function(data){
			console.log(data);
		})
	});
};