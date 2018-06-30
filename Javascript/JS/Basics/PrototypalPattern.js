var human={
	species : "human",
	create : function(values) {
		var instance = Object.create(this);
		//key are the attributes and values[key] the value of each attribute
		Object.keys(values).forEach(function( key ){
			instance[key] = values[key];
			/*
			There are two ways to add new properties to an object:
				var obj = {
    				key1: value1,
    				key2: value2
				};
			
			Using dot notation:
				obj.key3 = "value3";

			Using square bracket notation:
				obj["key3"] = "value3";
			*/
		});
		return instance;
	},
	saySpecies : function() { console.log(this.species); },
	sayName : function(){ console.log(this.name); }
};

var musician = human.create({
	job : "musician",
	playinstrument: function(){ return this.instrument; }
});

var will = musician.create({ name: "will", instrument: "drums"});
