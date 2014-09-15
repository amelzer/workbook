var fs = require('fs'); // file system operation module

var fileContent = fs.readFile(process.argv[2], function(err, data){
	console.log(data.toString().split('\n').length-1);	
	
	}); 
