/*global $*/

alert("hello there")


$("#buttonG").click(function() {
	$("#guardImg").attr("src", "https://i.ytimg.com/vi/Ph6zgx_IA34/maxresdefault.jpg");
	function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;

}
	var shootingIn = getRandomInt(20,70);
	var shootingOut = getRandomInt(60,100);
	var handling = getRandomInt(60,100);
	var passing = getRandomInt(60,100);
	var steal = getRandomInt(30,100);
	var block = getRandomInt(20,70);
	var speed = getRandomInt(60,100);
	var strength = getRandomInt(35,85);
	var vert = getRandomInt(100,60);

	
	$("#outputG").append("<br/> <br/> Interior Shooting " + shootingIn, "<br/> Perimeter Shooting " + shootingOut + "<br/> Ball Handling " + handling + "<br/> Passing " + passing +  "<br/> Steal " + steal + "<br/> Block " + block + "<br/> Speed " + speed + "<br/> Strength " + strength + "<br/> Vert " + vert);
});



$("#buttonF").click(function() {
	$("#fwdImg").attr("src", "https://i.ytimg.com/vi/K15cgtcrpqk/maxresdefault.jpg");
	function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;

}
	var shootingIn = getRandomInt(20,70);
	var shootingOut = getRandomInt(60,100);
	var handling = getRandomInt(60,100);
	var passing = getRandomInt(60,100);
	var steal = getRandomInt(20,100);
	var block = getRandomInt(20,70);
	var speed = getRandomInt(60,100);
	var strength = getRandomInt(35,85);
	var vert = getRandomInt(100,60);

	$("#outputF").append("<br/><br/> Interior Shooting " + shootingIn, "<br/> Perimeter Shooting " + shootingOut + "<br/> Ball Handling " + handling + "<br/> Passing " + passing +  "<br/> Steal " + steal + "<br/> Block " + block + "<br/> Speed " + speed + "<br/> Strength " + strength + "<br/> Vert " + vert);
});

