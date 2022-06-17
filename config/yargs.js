//Usar Yargs pero solo la caracteristica argv
const argv=require('yargs')
        .option('b',{
            alias:'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base para multiplicar'
        })
        .option('l',{
            alias:'listar',
            type: 'boolean',
            //demandOption: true,
            default: false,
            describe: 'Muestra la tabla en consola'
        })
        .option('h',{
            alias:'hasta',
            type: 'number',
            //demandOption: true,
            default: 10,
            describe: 'Limite que se va a multiplicar la base'
        })
        .check( (argv,options) => {
            //console.log ('prueba', argv)
            
            if( isNaN( argv.b ) ){
                throw 'La base tiene que ser un numero'
            }

            if( isNaN( argv.h ) ){
                throw 'Hasta tiene que ser un numero'
            }

            return true;
        })
        .argv;

        module.exports=argv;