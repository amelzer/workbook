var http = require('http')
var args = process.argv.slice(2);
var callback_nr = args.length;


for(var index in args){
		getData(index);
	}
	
function getData(index){
		http.get(args[index],function(response){
				var result = "";
				response.setEncoding('utf8');
				response.on('data', function(data){result +=data;});
				response.on('end', function(end){
					args[index] = result;
					callback_nr -= 1;
						if(callback_nr == 0){
							hauRaus();
						}
					})			
			})
	}
	
function hauRaus(){
		for(index in args){
				console.log(args[index]);
			}
	}



