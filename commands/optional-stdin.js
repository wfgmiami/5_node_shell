'use strict';
const fs = require('fs');
const request = require('request');

function cat(stdin, filenames, done){

	if(stdin && !filenames) done(stdin);
	
		
	filenames = filenames.split(' ');
	const texts= [];
	var count = 0;

	filenames.forEach( function(filename,i){
		fs.readFile(filename, { encoding: 'utf8'}, function (err, text){
			if(err) return err;
			texts[i] = text;
			count++;
			if(count == filenames.length){
				done(texts.join(''));	 	
			}			
		})

	})

}
	
function processFile(stdin, filename, done, custom){
	if(stdin && !filename) produceOutput(null, stdin);
	else fs.readFile(filename, 'utf8', produceOutput);
	function produceOutput(err, text){
		if(err) throw err;
		done(custom(text));
	}

}

function head(stdin, filename, done){
	processFile(stdin, filename, done, function(text){
		return text.split('\n').slice(0,5).join('\n')	
	})
}

	
function tail(stdin, filename, done){
	processFile(stdin, filename, done, function(text){
		return text.split('\n').slice(-5).join('\n')	
	})
}

function sort(stdin, filename, done){
	processFile(stdin, filename, done, function(text){
		return text.split('\n').sort().join('\n')	
	})
}

function wc(stdin, filename, done){
	processFile(stdin, filename, done, function(text){
		return text.split('\n').length;	
	})
}

function uniq(stdin, filename, done){
	processFile(stdin, filename, done, function(text){
		var lines = text.split('\n');
		for(var i = 0; i < lines.length; i++){
			if(lines[i] === lines[i+1]){
				lines.splice(i,1);	
				i--;
			}		
		}
	    return lines.join('\n');
	})
}


function curl(stdin, url, done){
	if(stdin && !url) return produceOutput(null, {statusCode: 200}, stdin);
	
	if(url.slice(0,7) !== 'http://') url = 'http://' + url;

	request(url, produceOutput);

	function produceOutput(err, response, body){
		if(err) throw err;
		else if(response && (response.status > 3999)) throw new Error(response.statusCode)
		if(body) done(body)
		else done('');
	}
}

module.exports = {
	cat: cat,
	head: head,
	tail: tail,
	sort: sort,
	wc: wc,
	uniq: uniq,
	curl: curl
}

