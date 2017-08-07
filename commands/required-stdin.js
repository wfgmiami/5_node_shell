'use strict';
const chalk = require('chalk');

function grep(stdin, matchString, done){

//   var lines = stdin.toString().trim().split('\n');
//   var result = '';
//   var output = [];

//   lines.forEach( line => {
//     var words = line.split(' ');
//     result = words.map( word => {
//       if( word === matchString){
//         return chalk.blue(word)
//       }else{
//         return word
//       }
//     }).join(' ')
//     output.push(result);
//   })

//   done(output.join('\n'));

// }

  const matcher = new RegExp(matchString, 'g');
  const matches = stdin
  .split('\n')
  .filter(line => matcher.test(line))
  .map(line => {
    return line.replace(matcher, match => chalk.green(match));
  })
  .join('\n');

  done(matches);
}

module.exports = {
  grep: grep
}
