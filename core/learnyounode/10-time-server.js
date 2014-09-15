var net = require("net");

var server = net.createServer(function(socket){
		var date = new Date();
		var year = date.getFullYear()
		var month = eval(date.getMonth()+1)
		var data = year+"-"+zeroFill(eval(date.getMonth()+1))+"-"+date.getDate()+" "+zeroFill(date.getHours())+":"+zeroFill(date.getMinutes());
		socket.end(data);
	
	});
	server.listen(process.argv[2]);

function zeroFill( number)
{
  var width = 2;
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
}

/**
 var net = require('net')
    
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))

 * */
