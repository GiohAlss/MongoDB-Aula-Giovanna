/*DEFINE O NOME DO BANCO DE DADOS*/
const database = 'libri-database';

/*DEFINE O NOME DA COLLECTION*/
const collection = 'libri-collection';

/*ACESSO AO BANCO DE DADOS libri-database*/
use(database);

/*CRIA A COLLECTION libri-collection*/
db.createCollection(collection);