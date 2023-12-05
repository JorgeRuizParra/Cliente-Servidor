$(principal);

function principal(){
	console.log("DOM creado");

	$("#bo").click(function(){
		$("p").hide();
	})

	$("#bm").click(function(){
		$("p").show();
	})

	$("#bt").click(function(){
		$("p").toggle();
	})
	$("#bi").click(function(){
		$(".impar").toggle();
	})
	$("#bp").click(function(){
		$(".par").toggle();
	})

	$("#p1").click(function(){
		this.style.color = "pink";
	})

	$("#p2").click(function(){
		this.style.color = "Khaki";
	})

	$("#p3").click(function(){
		this.style.color = "SaddleBrown";
	})


}