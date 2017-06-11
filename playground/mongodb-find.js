const {MongoClient, ObjectID} = require('mongodb'); // Destructuring


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err){
        return console.log('Impossible de se connecter à MongoDB Server');
    }
    console.log('Connecté à MongoDB Server');

    
    // db.collection('Todos').find({_id: new ObjectID('593dac01e9f49fc12688bcdf')}).toArray().then((docs) => {
    //     console.log('Résultats de Todos: ');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Impossible de fetch todos', err);
    // });
    
    db.collection('Users').find({age: 28}).count().then((nombre) => {
        console.log(`Nombre  de personnes de 28 ans: ${nombre}`);
    }, (err) => {
        console.log('Impossible de fetch todos', err);
    });

    db.collection('Users').find({name: "Mike"}).toArray().then((docs) => {
        console.log(`Résultats de la recherche Mike: `);        
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Impossible de fetch todos', err);
    });
    
    // db.close();
});