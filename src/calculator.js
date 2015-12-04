
var Calculator = {
	current: 0,
	add: function() {
		var sum = this.current;
		for(var i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}
		this.current = sum;
		return sum;
	},
	subtract: function() {
		var result = this.current;
		for(var i = 0; i < arguments.length; i++) {
			result -= arguments[i];
		}
		this.current = result;
		return result;
	},
	multiply: function() {
		var multiplication = this.current;
		for(var i = 0; i < arguments.length; i++) {
			multiplication *= arguments[i];
		}
		this.current = multiplication;
		return multiplication;
	},
	reset: function() {
		this.current = 0;
	}
};