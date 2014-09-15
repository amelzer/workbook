    var http = require('http')
    
    http.get(process.argv[2], function (response) {
	  var result = "";
	  var chars = 0;
      response.setEncoding('utf8')
      response.on('data', function(data){result +=data; chars += data.length;});
      response.on('error', console.error);
      response.on('end', function(end){console.log(chars); console.log(result);})
    })


/* Official
    var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })

*/
