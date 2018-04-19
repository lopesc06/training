function Employee(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
}

var employee = new Employee("Pragim", "Tech");