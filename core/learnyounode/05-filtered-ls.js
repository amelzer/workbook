var fs = require('fs'); // file system operation module
var path = require('path');

fs.readdir(process.argv[2], function(err,data){;
		for(var index in data){
				if(process.argv[3] === path.extname(data[index]).slice(1)){
						console.log(data[index]);
					}
			}
	
	});
