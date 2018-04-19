var Car = function(maxSpeed, driver) {
	this.maxSpeed = maxSpeed;
	this.driver = driver;
	this.drive = function(){
		console.log("My max speed is:"+this.maxSpeed);
	};
	this.getdriver = function(){
		console.log("My driver is:"+this.driver);
	};
};

var myCars=[];
for(i=0; i<5; i++){
	myCars[i]=new Car(Math.random(), "Driver"+i);
	myCars[i].drive();
	myCars[i].getdriver();
}

