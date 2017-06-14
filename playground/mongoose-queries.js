const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5941498808841937e083c232';

// if(!ObjectID.isValid(id)){
//     console.assert('ID invalide');
// };

// Todo.find({
//     _id: id
// }).then((resultats) => {
//     console.log('Nos tâches programmées: ', resultats);
// });

// Todo.findOne({
//     _id: id
// }).then((resultat) => {
//     console.log('Notre tâche programmée: ', resultat);
// });

// Todo.findById(id).then((resultat) => {
//     if(!resultat){
//         return console.log('Aucune tâche programmée avec cet ID');
//     }
//     console.log('Notre tâche programmée (par ID): ', resultat);
// }).catch((e) => console.log(e));

User.findById('594181a3fa761f808c025a41').then((user) => {
    if(!user){
        return console.log('Utilisateur introuvable');
    }
    console.log('Utilisateur trouvé: ', user);
}, (erreur) => {
    console.log(erreur);
}).catch((erreur) => console.log(erreur));