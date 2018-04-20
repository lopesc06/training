//Properties allow you to have more control on how your attributes are manipulated
function Employee(name, age) {
	//private variables
	var name = name;
	var age = age;

	//Defining properties for the object attribute age
	Object.defineProperty(this, "age", {
		get: function() { return age; },
		set: function(newAge){
			if(newAge<0 || newAge>99)
				alert("Invalid age");
			else
				age=newAge;
		}
	});

	//Defining properties for the object attribute name
	Object.defineProperty(this, "name", {
		get:function() { return name; }
	});

	//Defining a new attribute and its properties
	Object.defineProperty(this, "year", {
		value: 2018,
		writable: false, //can't reassign the value 
		configurable: true, //true allows property to be deleted and false don't 
	});
}

function Student(name, age) {
	//public variables
	this.name = name;
	this.age = age;
}

var student = new Student("Arturo",22);
console.log(student);
student.name = "Nombre sin sentido :v";
student.age =  12893;
console.log(student);

var employee = new Employee("Jorge",33);
console.log(employee.name+" "+employee.age+" "+employee.year);
employee.age = 12;
employee.name = "jasdhkashdkj";
employee.year = 2019;
//delete employee.year;
console.log(employee.name+" "+employee.age+ " "+employee.year);

