const User = require('./../models/Usuarios')
const parseStringAsArray = require('../utils/parseStringAsArray');
// index, show, store, update, destroy

module.exports = {
    
    async index (request, response ){
        const user = await User.find().sort({ _id : -1});

        return response.json(user);
    }, 
    async destroy (request, response ){
            
        const user = await User.remove();
        return response.json('After destroy' + user);
    },

    async destroyById ( request, response){
        const { name,bio,avatar_url,specs, latitude, longitude } = request.body;
        console.log('REQUEST RECEBIDO '  + name);

        const userFound = await User.findOne({ name });
        let id = userFound._id;

        console.log(id);
        
        const user = await User.remove( { 
                _id :  id
        }, function (err,data) {
            console.log(err,data);
        }(
        ));

        return response.json(user);
        
    },

    async store (request , response ) {
        const { name,bio,avatar_url,specs, latitude, longitude } = request.body;

        const specsArray = parseStringAsArray(specs)
    
        let user = await User.findOne({ name });

        if (!user){

            const location = {
                type : 'Point',
                coordinates : [ longitude , latitude],
            }
        
             user = await User.create({
                name,
                bio,
                avatar_url,
                specs : specsArray,
                location,
            })
        }
    

        return response.json(user);
    }
}