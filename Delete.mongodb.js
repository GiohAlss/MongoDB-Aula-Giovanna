const database = 'libri-database';

use(database);

//DELETE ONE
// db['libri-collection'].deleteOne(
//     {codigo:'5'}
// );

//DELETE MANY
db['libri-collection'].deleteMany(
    {categoria:'Fantasia Heroica'}
);