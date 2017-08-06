const _ = require('lodash');

_.assign(module.exports, 
	require('./no-stdin.js'),
	require('./optional-stdin'),
	require('./required-stdin')
)



