
var mycar = new Object();
mycar.drivers = [ "John kramer","Peter Parker", "Arturo Escutia"];
mycar.maxSpeed = 100;
mycar.licensePlate = "jksdh893";
mycar.action= function(string) {
	if(string === "stop")
		console.log("stop");
	else
		console.log("doing action:"+ string);
}

mycar.action("ruuuuuuun");

var mycar2 = {maxSpeed:200 , drivers:["memo","javier"], licensePlate:"kajsdhkasj"};

console.log(mycar);
console.log(mycar2);