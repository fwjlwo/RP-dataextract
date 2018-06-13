const fs = require('fs');
const Json2csvTransform = require('json2csv').Transform;
const Json2csvParser = require('json2csv').Parser;
const Readable = require('stream').Readable;
const source_dir = './source/';
const base_dir = './out/';

function streamToString(stream, cb) {
  const chunks = [];
  stream.on('data', (chunk) => {
    chunks.push(chunk.toString());
  });
  stream.on('end', () => {
    cb(chunks.join(''));
  });
}

argv_index = 2;

// pega o nome
const searchName = process.argv[argv_index];

// não pode estar vazio
if(!searchName){
  throw new Error('Erro: falta o nome do parlamentar');
  process.exit();
}

// cria pasta
var this_dir = base_dir + searchName + '/';

if (!fs.existsSync(this_dir)){
    fs.mkdirSync(this_dir);
}

const input = fs.createReadStream(source_dir + searchName +'.json', { encoding: 'utf8' });

//
/*const csv_proc = fs.createWriteStream('./out/'+ searchName +'_proc.csv', { encoding: 'utf8' });
const csv_proc_list = fs.createWriteStream('./out/'+ searchName +'_proc_list.csv', { encoding: 'utf8' });
const csv_outr = fs.createWriteStream('./out/'+ searchName +'_outr.csv', { encoding: 'utf8' });
const csv_outr_list = fs.createWriteStream('./out/'+ searchName +'_outr_list.csv', { encoding: 'utf8' });
const csv_legs = fs.createWriteStream('./out/'+ searchName +'_legs.csv', { encoding: 'utf8' });
const csv_legs_list = fs.createWriteStream('./out/'+ searchName +'_legs_list.csv', { encoding: 'utf8' });*/

// seleciona as fields
const f_info_list = ['nome', 'valor'];
const f_pres = ['pres.tipo', 'pres.sessoes', 'pres.presenca', 'pres.just', 'pres.njust', 'pres.pontosRP'];
const f_priv = ['priv.pontosRP'];
const f_priv_list = ['ano', 'valor'];
const f_proc = ['proc.pontosRP'];
const f_proc_list = ['descr', 'valor'];
const f_outr = ['outr.pontosRP'];
const f_outr_list = ['descr', 'valor'];
const f_legs = ['legs.pontosRP'];
const f_legs_list = ['id','nome', 'valor', 'voto'];
//var opts = { fields };
//
const transformOpts = { highWaterMark: 16384, encoding: 'utf-8' };
//var fields;

// monta o stream do csv_pres
const csv_pres = fs.createWriteStream(this_dir + searchName +'_pres.csv', { encoding: 'utf8' });
var fields = f_pres;
var opts = { fields };
const json2csv_pres = new Json2csvTransform( opts , transformOpts);
const processor = input.pipe(json2csv_pres).pipe(csv_pres);
//csv_pres.end();


// monta o stream do csv_priv
const csv_priv = fs.createWriteStream(this_dir + searchName +'_priv.csv', { encoding: 'utf8' });
fields = f_priv;
opts = { fields };
const json2csv_priv = new Json2csvTransform( opts , transformOpts);
const processor_priv = input.pipe(json2csv_priv).pipe(csv_priv);
//csv_priv.end();

// monta o stream do csv_proc
const csv_proc = fs.createWriteStream(this_dir + searchName +'_proc.csv', { encoding: 'utf8' });
fields = f_proc;
opts = { fields };
const json2csv_proc = new Json2csvTransform( opts , transformOpts);
const processor_proc = input.pipe(json2csv_proc).pipe(csv_proc);
//csv_proc.end();

// monta o stream do csv_outr
const csv_outr = fs.createWriteStream(this_dir + searchName +'_outr.csv', { encoding: 'utf8' });
fields = f_outr;
opts = { fields };
const json2csv_outr = new Json2csvTransform( opts , transformOpts);
const processor_outr = input.pipe(json2csv_outr).pipe(csv_outr);
//csv_outr.end();

// monta o stream do csv_legs
const csv_legs = fs.createWriteStream(this_dir + searchName +'_legs.csv', { encoding: 'utf8' });
fields = f_legs;
opts = { fields };
const json2csv_legs = new Json2csvTransform( opts , transformOpts);
const processor_legs = input.pipe(json2csv_legs).pipe(csv_legs);
//csv_legs.end();

//
// AGORA PARA LIDAR COM LISTAS
//
streamToString(input, function(str) {
  var json_obj = JSON.parse(str);

  // faz as operações necessárias
  // - priv_list
  json_obj.priv.anos.map(function(v,i) {  
    v.ano = v.ano.trim();
    v.valor = v.valor;
  });

  // monta o stream do csv_info_list
  const csv_info_list = fs.createWriteStream(this_dir + searchName +'_info_list.csv', { encoding: 'utf8' });
  fields = f_info_list;
  opts = { fields };
  const json2csv_info_list = new Json2csvParser( opts );
  var result = json2csv_info_list.parse( json_obj.info, opts );
  console.log( "Resultado: "+ result );
  const processor_info_list = csv_info_list.write( result, 'utf-8' );
  //csv_info_list.end();

  // monta o stream do csv_priv_list
  const csv_priv_list = fs.createWriteStream(this_dir + searchName +'_priv_list.csv', { encoding: 'utf8' });
  fields = f_priv_list;
  opts = { fields };
  const json2csv_priv_list = new Json2csvParser( opts );
  var result = json2csv_priv_list.parse( json_obj.priv.anos, opts );
  console.log( "Resultado: "+ result );
  const processor_priv_list = csv_priv_list.write( result, 'utf-8' );
  //csv_priv_list.end();

  // monta o stream do csv_proc_list
  const csv_proc_list = fs.createWriteStream(this_dir + searchName +'_proc_list.csv', { encoding: 'utf8' });
  fields = f_proc_list;
  opts = { fields };
  const json2csv_proc_list = new Json2csvParser( opts );
  result = json2csv_proc_list.parse( json_obj.proc.processos, opts );
  console.log( "Resultado: "+ result );
  const processor_proc_list = csv_proc_list.write( result, 'utf-8' );
  //csv_proc_list.end();

  // monta o stream do csv_outr_list
  const csv_outr_list = fs.createWriteStream(this_dir + searchName +'_outr_list.csv', { encoding: 'utf8' });
  fields = f_outr_list;
  opts = { fields };
  const json2csv_outr_list = new Json2csvParser( opts );
  result = json2csv_outr_list.parse( json_obj.outr.criterios, opts );
  console.log( "Resultado: "+ result );
  const processor_outr_list = csv_outr_list.write( result, 'utf-8' );
  //csv_outr_list.end();

  // monta o stream do csv_legs_list
  const csv_legs_list = fs.createWriteStream(this_dir + searchName +'_legs_list.csv', { encoding: 'utf8' });
  fields = f_legs_list;
  opts = { fields };
  const json2csv_legs_list = new Json2csvParser( opts );
  result = json2csv_legs_list.parse( json_obj.legs.leis, opts );
  console.log( "Resultado: "+ result );
  const processor_legs_list = csv_legs_list.write( result, 'utf-8' );
  //csv_legs_list.end();
});




// You can also listen for events on the conversion and see how the header or the lines are coming out.
json2csv_pres
  .on('header', header => console.log(header))
  .on('line', line => console.log(line))
  .on('error', err => console.log(err));

