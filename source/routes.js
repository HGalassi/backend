const { Router } = require('express');
// const User = require('./models/Usuarios')
const UserController = require('./controllers/UserController');
const SearchController = require('./controllers/SearchController');
const Auth = require('./controllers/Auth');



const routes = Router ();

routes.get('/search' , SearchController.index);
routes.get('/users' , UserController.index);
routes.delete('/delete' , UserController.destroy);
routes.post('/delete-user' , UserController.destroyById);
routes.post('/users' , UserController.store);
routes.post('./');
routes.get('/senha6' , Auth.senha6);
routes.get('/senha6-2' , Auth._senha6);
routes.get('/token' , Auth.token);
routes.get('/fnc' , Auth.fnc);
routes.post('/senha-receive' , Auth.senha6Receive);



module.exports = routes;