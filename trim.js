const fs = require('fs');
const Json2csvTransform = require('json2csv').Transform;
const Json2csvParser = require('json2csv').Parser;
const Readable = require('stream').Readable;
const source_dir = './source/';
const base_dir = './out/';

argv_index = 2;

// pega o nome
const searchName = process.argv[argv_index];

const input = fs.createReadStream(source_dir + searchName +'.json', { encoding: 'utf8' });
//const out = fs.createWriteStream('./test/'+ searchName +'.json', { encoding: 'utf8' });

function streamToString(stream, cb) {
  const chunks = [];
  stream.on('data', (chunk) => {
    chunks.push(chunk.toString());
  });
  stream.on('end', () => {
    cb(chunks.join(''));
  });
}

streamToString(input, function(str) {
	//
	fs.writeFile('./test/'+ searchName +'.json', str.replace(/\\n/g, ""), 'utf8');
})