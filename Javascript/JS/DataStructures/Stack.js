//Stack
// functions: push, pop, peek,length

function Stack() {
	//private attributes
	var letters=[];
	var length;

	Object.defineProperty(this,"letters",{
		get:function() { return letters; }
	});

	Object.defineProperty(this,"length",{
		get:function() { return letters.length; }
	});

	//private methods
	this.push=function(value){ letters.push(value); };
	this.pop=function() { letters.pop(); };
	this.peek=function(){ return letters[letters.length-1]; };

}


var stack = new Stack();
var i=0;
while(i<10){
	stack.push(i);
	i++;
}
document.write("stack"+stack.letters+" length:"+ stack.length+"</br>");
stack.length = function(){ return 213123;};
stack.length = 213123;
stack.pop();
document.write("stack "+stack.peek()+" length:"+ stack.length);