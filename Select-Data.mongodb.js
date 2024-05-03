const database = 'libri-database';

use(database);

/*SELECIONA TODOS OS DADOS DE TODOS OS ARQUIVOS DA COLLECTION*/
db['libri-collection'].find();

/*SELECIONA DADOS BASEADO EM UM CRITÉRIO DE BUSCA*/
db['libri-collection'].find({"categoria":"Ficção Científica"});

db['libri-collection'].find({"categoria":"Ficção Científica"},{"_id":0, "codigo":0}); /*Aqui informa os campos NÃO desejados (false)*/
db['libri-collection'].find({},{"_id":0, "codigo":0});

/*SELECIONA DADOS BASEADO EM UM CRITÉRIO DE BUSCA POR UMA PARTE DE STRING DE UM CAMPO*/
db['libri-collection'].find({"titulo":robôs/i});
