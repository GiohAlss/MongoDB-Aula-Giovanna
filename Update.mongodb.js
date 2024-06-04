const database = 'libri-database';

use(database);

//UPDATE ONE
db['libri-collection'].updateOne(
    {titulo:'As Cavernas de Aço'}, //WHERE
    {
        $set:{valor:250} //WHO
    }
);

//UPDATE MANY
// db['libri-collection'].updateMany(
//     {categoria:'Ficção Científica'}, 
//     {
//         $set:{valor:250} 
//     }
// );