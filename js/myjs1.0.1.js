
		
		
		
//		var lists = document.getElementById("lists");
		var input = document.getElementById("str");
		var scion = document.getElementById("scion");
		
		
		
		
		scion.addEventListener("click",function(e){
			fp(input.value);
		});
		
		input.addEventListener("keydown",function(e){
			if(e.keyCode == 13){
				fp(e.target.value);
			}
			console.log(e.keyCode);
		});
		
		
		
		var fp = function p(str){window.location.replace("https://www.so.com/s?q=" + encodeURIComponent(str));}
		
		
		
		
		
		
		
		
	