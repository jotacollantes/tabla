
//Aqui voy a usar la funcion crearArchivo del archivo importado
const {crearArchivo}=require('./helpers/multiplicar.js')
//Aqui declaro una variable argv del tipo argv importado
const argv=require('./config/yargs.js')
const colors=require('colors');

console.clear();



// [
//     '/usr/local/bin/node',
//     '/Users/jota/Sites/nodejs/03-base-node/app.js',
//     '--base=5'
//   ]

//Hay que desestructurar  process.argv
//arg3 tendra por defecto ''
// const [,,arg3='base=5']=process.argv;
// const [,base=5]=arg3.split("=");

//console.log(base);


//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs:', argv.base,argv.listar);

//const b=5;


crearArchivo(argv.b,argv.l,argv.h)
.then((msg) => {
    console.log(`Archivo ${msg.rainbow} creado`)
})
.catch((err)=>{
      console.log(err)
     });

