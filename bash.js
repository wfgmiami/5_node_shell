// const ourCommands = require('./commands');
// const chalk = require('chalk');
// const prompt = chalk.blue('\nprompt >');



// process.stdout.write(prompt);
// process.stdin.on('data', function(data){

//   const tokens = data.toString().trim().split(" ");
//   const cmd = tokens[0];
//   const args = tokens.slice(1).join(' ');

//   if (ourCommands[cmd]){
//     ourCommands[cmd](args,done);
//   }else{
//     process.stderr.write(chalk.red("Command not found\n " + cmd));
//   }
// })

// function done(output){
//   process.stdout.write(output + prompt);
// }


// re-done on 8/3/17
// var commands = require('./commands.js');
// var userCommand = 'pwd';

// function next(data){
//   process.stdout.write(data);
//   process.stdout.write('\nprompt > ')
// }

// process.stdout.write('prompt > ');

// process.stdin.on('data', function(data){
//   var dataArr = data.toString().trim();
//   dataArr = dataArr.split(' ');
//   var cmd = dataArr[0];

//   var args = dataArr.slice(1).join(' ');

//   if(cmd === 'pwd'){
//    commands[userCommand]();
//   }else if( cmd === 'date'){
//    commands.date();
//   }else if( cmd === 'ls'){
//     commands.ls();
//   }else if( cmd === 'echo'){
//     commands.echo(args);
//   }else if( cmd === 'cat'){
//     commands.cat(dataArr.slice(1), next);
//   }else if( cmd === 'head'){
//     commands.head(dataArr.slice(1), next);
//   }else if( cmd === 'tail'){
//     commands.tail(dataArr.slice(1), next)
//   }else if( cmd === 'sort'){
//     commands.sortA(dataArr.slice(1), next);
//   }else if( cmd === 'wc' ){
//     commands.wc(dataArr.slice(1), next)
//   }else if( cmd === 'uniq' ){
//     commands.uniq(dataArr.slice(1), next);
//   }

// })

const chalk = require('chalk');
const prompt = chalk.blue('\nprompt > ');
const ourCommands = require('./commands');

process.stdout.write(prompt);

process.stdin.on('data', function(data){

  const tokens = data.toString().trim().split(' ');
  const cmd = tokens[0];
  const args = tokens.slice(1).join(' ');

  if( ourCommands[cmd] ) ourCommands[cmd](args);
  else process.stderr.write(chalk.red('command not found: ') + cmd + prompt);

})
