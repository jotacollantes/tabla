const fileSystem=require('fs');
const colors=require('colors');

const tabla=(base,num)=>
{
    return (base * num)  ;
}

const crearArchivo= async(base,listar,hasta=10) =>
{
        try 
        {
            let i=1;
            let salida,consola='';
            b=base;
          
            

            while (i<=hasta) 
            {
                //console.log(`1 x ${i} = ${tabla5(i)}`)
                salida+=`${b} x ${i} = ${tabla(b,i)}\n`
                consola+=`${b} ${'x'.green} ${i} ${'='.green} ${tabla(b,i)}\n`
            i++;
            }

            if(listar){
                console.log("======================".green);
                console.log(`====  Tabla del ${b} ====`.blue);
                console.log("======================".green);
                console.log(consola);
            }
            

            // fileSystem.writeFile(`tabla-${b}.txt`,salida,(err)=>
            // {
            //     if (err) 
            //     {
            //       //eject(err); 
                
            //       reject(console.log(`Tabla ${b} No Creada`) )
                
            //     }
            //     else
            //     {
            //        resolve(console.log(`Tabla ${b} Creada`) )
            //     }
                

            // })

            fileSystem.writeFileSync(`./salida/tabla-${b}.txt`,salida);
            return `Tabla-${b}.txt`
        }
        catch (err)
        {
            throw err
        }
}


module.exports={
    crearArchivo
}