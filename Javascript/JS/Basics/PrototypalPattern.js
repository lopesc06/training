var human={
	species : "human",
	create : function(values) {
		var instance = Object.create(this);
		console.log(instance);
		Object.keys(values).foreach(function( key ){
			instance[key] = values[key];
		});
		return instance;
	},
	saySpecies : function() { console.log(this.species); },
	sayName : function(){ console.log(this.name); }
};

var musician = human.create({
	species : "musician",
	playinstrument: function(){ return this.instrument; }
});

var will = musician.create({ name: "will", instrument: "drums"});
