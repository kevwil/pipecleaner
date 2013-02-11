var BufferStream = require('bufferstream');
var clc = require('cli-color');

// shortcuts for colored output
var error = clc.red;
var warning = clc.yellow;
var success = clc.green;
var note = clc.blue.italic.underline;

// set up line-based chunked stream
var inStream = new BufferStream({encoding:'utf8',size:'flexible'});
inStream.split('\n', function(line){
	inStream.emit('data', line.toString());
});

// set up stdin to stream to buffered
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk){
	inStream.write(chunk);
});

process.stdin.on('end', function () {
	process.exit(0);
});

// wire up line events to filter
inStream.on('data', filter);


// filters map regex tests to (optionally) colored output
function filter (line) {
	if(/error/i.test(line)){
		console.log(error(line));
	}
	if(/warn/i.test(line)){
		console.log(warning(line));
	}
	if(/success/i.test(line)){
		console.log(success(line));
	}
	if(/info/i.test(line)){
		console.log(note(line));
	}
	if(/foo/i.test(line)){
		console.log(line);
	}
	// otherwise filter out line (no output)
}