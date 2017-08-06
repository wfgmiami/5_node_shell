/*
var fs = require('fs');

function ls(){
	fs.readdir('.', function(err, files){
		if(err) throw err;
		files.forEach(file => {
			process.stdout.write(file.toString() + '\n');
		})
		
		process.stdout.write('\nprompt> ');
	})	

}

function pwd(){
	process.stdout.write(process.env.PWD);
	process.stdout.write('\nprompt> ');

}

function date(){
	
	process.stdout.write(Date());
	process.stdout.write('\nprompt> ');
}
    
function echo(args){
	process.stdout.write(args);
	process.stdout.write('\nprompt> ');
}



function cat(files,next){

	  files.forEach(file => {

		fs.readFile(file, 'utf8', function(err, data){
			if(err) return err		
			next(data);
			
		})
	 })

}

function sortA(files,next){
	var dataArray = [];
    var dataArraySorted = [];

	files.forEach(file => {
		fs.readFile(file, 'utf8', function(err, data){
	
			dataArray = data.split('\n');
			dataArraySorted = dataArray.sort();
			next(dataArraySorted.join('\n'));
		})

	})

}

function wc(files, next){
	var dataA = [];

	files.forEach(file => {
		fs.readFile(file,'utf8', (err,data) => {
			if(err) throw err;
			dataA = data.split('\n');
			next(dataA.length.toString());
		})
	})

}

function head(files, next){
	files.forEach(file =>{
		fs.readFile(file, 'utf8', (err, data)=>{
			if(err) throw err;
			next(data.substring(0,10) );
		});
	});
}
	
function tail(files, next){
	files.forEach(file =>{
		fs.readFile(file, 'utf8', (err, data)=>{
			if(err) throw err;
			next(data.substring(data.length-10) );
		});
	});
}

function uniq(files, next){
	var dataArray = [];
	var dataArraySorted = [];

	files.forEach( file => {
		fs.readFile( file,'utf8', (err, data) => {
			dataArray = data.split('\n');
			dataArraySorted = dataArray.sort();
			for(var i = 0; i < dataArraySorted.length - 1; i++){
				if(dataArraySorted[i] === dataArraySorted[i + 1]){
					dataArraySorted.splice(i+1,1);
					i--;
				}
			}
			next(dataArraySorted.join('\n'));
		})
	
	})

}
	
module.exports ={
	pwd,
	date,
	ls,
	echo,
	cat,
	head,
	tail,
	sortA,
	wc,
	uniq
}

*/

'use strict';
const fs = require('fs');
const chalk = require('chalk');
const prompt = chalk.blue('\nprompt > ');

function pwd(){
	process.stdout.write(process.cwd());
	process.stdout.write(prompt);

}

function date(){
	process.stdout.write(Date());
	process.stdout.write(prompt);

}

function ls(){
	fs.readdir('.', function(err, filenames){
		if (err) throw err;
		
		process.stdout.write(filenames.join('\n'));
		process.stdout.write(prompt);
	})
}

function echo(args){
	const output = args
	.split(' ')
	.map(function(arg) {
		return (arg[0] === '$') ? process.env[arg.slice(1)] : arg;
	})
	.join(' ');

	process.stdout.write(output);
	process.stdout.write(prompt);
}

module.exports = {
	pwd,
	date,
	ls,
	echo
}
