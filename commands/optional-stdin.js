'use strict';
const fs = require('fs');
const chalk = require('chalk');
const prompt = chalk.blue('\nprompt > ');

function cat(filenames){
	
	filenames = filenames.split(' ');
	const texts= [];
	var count = 0;

	filenames.forEach( function(filename,i){
		fs.readFile(filename, { encoding: 'utf8'}, function(err, text){
			if(err) return err;
			texts[i] = text;
			count++;
			if(count == filenames.length){
				process.stdout.write(texts.join(''));
				done();	 	
			}			
		})

	})

}
	

function head(filename){
	fs.readFile(filename, 'utf8', function(err, text){
		if(err) throw err;
		process.stdout.write(text.split('\n').slice(0,5).join('\n'));
		done()
		

	})
}

	
function tail(filename){
	fs.readFile(filename, 'utf8', function(err, text){
		if(err) throw err;
		process.stdout.write(text.split('\n').slice(-5).join('\n'));
		done()
	})
}

function done(){
	process.stdout.write(prompt);
}

module.exports = {
	cat: cat,
	head: head,
	tail: tail
}
