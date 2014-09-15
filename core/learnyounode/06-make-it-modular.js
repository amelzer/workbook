var testmodule = require('./testmodule.js');

testmodule(process.argv[2], process.argv[3], function(err,data){
		for(var index in data){
				console.log(data[index]);
			}
	});
