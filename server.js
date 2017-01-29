'use strict';

// Request and response object drills
// ==================================

const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// your code here. 
const madLib = (params) => {
	const params = {adjective1, adjective2, adjective3, adverb, name, pronoun, noun, place};
	return (
		`There's a ${adjective1} new ${name} in ${place} and ${pronoun} has everybody talking. 
		Stunningly ${adjective2} and ${adverb} ${adjective3}, all the cool kids know it. 
  		However, ${name} has a secret - ${name}'s a vile vampire.  
  		Will it end with a bite, or with a stake through the ${noun}?`);
	
};

// GET requests to the root of the server 
app.get('/', (req, res) =>
		res.send(madLib(params)); 
})

// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
