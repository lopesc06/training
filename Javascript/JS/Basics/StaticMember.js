/*
If you want method or a attribute to be shared by 
all instances then make it a static member otherwise make it an instance member.
*/
function Shape(shapeName) 
{
    // Instance field
    this.ShapeName = shapeName;

    // Static Field
    Shape.Count = ++Shape.Count || 1;

    // Static method
    Shape.ShowCount = function () 
    {
        return Shape.Count;
    }
}

var shape1 = new Shape("Circle");
var shape2 = new Shape("Rectangle");
var shape3 = new Shape("Triangle");
document.write("Shape.Count = " + Shape.ShowCount());
