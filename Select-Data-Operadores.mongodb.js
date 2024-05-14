const database = 'libri-database';

use(database);

/*SELECIONA LIVROS COM VALOR MAIOR QUE $100 ($gt)*/
// db['libri-collection'].find({valor:{$gt:100}});

/*SELECIONA LIVROS COM VALOR MENOR QUE $100 ($lt)*/
// db['libri-collection'].find({valor:{$lt:100}});

/*SELECIONA LIVROS COM VALOR MAIOR OU IGUAL QUE $100 ($gte)*/
// db['libri-collection'].find({valor:{$gte:100}});

/*SELECIONA LIVROS COM VALOR MENOR OU IGUAL QUE $100 ($lte)*/
// db['libri-collection'].find({valor:{$lte:100}});

/*SELECIONA LIVROS ENTRE UM INTERVALO DE VALORES*/
// db['libri-collection'].find({valor:{$gte:100, $lte:150}});
// db['libri-collection'].find({valor:{$gte:150, $lte:200}});

/*SELECIONA LIVROS ENTRE UM INTERVALO DE VALORES - ORDENAÇÃO ASCENDENTE*/
// db['libri-collection'].find({valor:{$gte:100, $lte:150}}).sort({valor:1});

/*SELECIONA LIVROS ENTRE UM INTERVALO DE VALORES - ORDENAÇÃO DESCENDENTE*/
// db['libri-collection'].find({valor:{$gte:100, $lte:150}}).sort({valor:-1});

/*SELECIONA LIVROS ENTRE UM INTERVALO DE VALORES - ORDENAÇÃO ASCENDENTE*/
// db['libri-collection'].find({valor:{$gte:100, $lte:150}}, {"_id": 0, "codigo": 0}).sort({valor:1});