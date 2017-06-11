//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// let user = {name: 'Fabio', age: 28};
// let {name} = user; // Destructuring
// console.log(name) // Fabio

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err){
        return console.log('Impossible de se connecter à MongoDB Server');
    }
    console.log('Connecté à MongoDB Server');
    

    db.collection('Todos').insertOne({
        text: `Aller faire les courses`,
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Impossible d\'ajouter les données');
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // db.collection('Users').insertOne({
    //     name: 'Jeremy',
    //     age: 28,
    //     location: 'Paris'
    // }, (erreur, resultat) => {
    //     if(erreur){
    //         return console.log('Ajout impossible - Erreure survenue');
    //     }
    //     console.log(resultat.ops)
    // });

    db.close();
} );