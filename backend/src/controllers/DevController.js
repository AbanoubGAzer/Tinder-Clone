const axios = require('axios');
const Dev = require('../models/Dev')

module.exports = {
    //Criar dev
    async store(req, res){
        //console.log(req.body.username)
        const { username } = req.body;

        //acesso api
        const response = await axios.get(`https://api.github.com/users/${username}`);

        //desestruturação para obter dados restantes do data
        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })

        return res.json(dev);
    }
};