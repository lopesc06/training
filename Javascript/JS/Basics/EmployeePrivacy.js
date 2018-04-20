function Employee(firstName, lastName) 
{
    // Private Field
    var privateFullName;

    // Public Fields
    this.firstName = firstName;
    this.lastname = lastName;

    // Private Function
    var privateGetFullName = function () {
        privateFullName = firstName + " " + lastName;
        return privateFullName;
    };

    // Privileged Function
    this.privilegedGetFullName = function () {
        return privateGetFullName();
    };

    // Public Function
    Employee.prototype.publicGetFullName = function () {
        return this.privilegedGetFullName();
    };
}

/*
    Public members
Public fields are created using the “this” keyword inside a function Constructor.
Public methods are added using the prototype object on function Constructor.
Public members, can be added deleted, or changed by any external function.
    
    Privileged members
Privileged methods are declared using the “this” keyword. These are public methods.
Privileged methods allow us to call private methods of the parent objects from outside the class.
Privileged methods can call private and public variables directly.
Privileged methods can be deleted or replaced but not altered
*/