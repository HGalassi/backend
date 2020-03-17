const User = require('../models/Usuarios')

const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index (request, response){

    const {latitude , longitude , specs } = request.query;

    const specsArray = parseStringAsArray(specs);

        console.log(specsArray);

        const users = await User.find({
            specs : {
                $in : specsArray,
            },
            location : {
                $near : {
                    $geometry : {
                        type : 'Point',
                        coordinates : [longitude, latitude ],
                    },
                    $maxDistance : 10000,
                },
            },
        });

        console.log(users);
        return response.json ({users })
    }
}