const axios = require('axios');
const Dev = require("../models/Dev");

module.exports = {
    //Listar dev
    async index(req, res){
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } }, //Não seja igual a user
                { _id: { $nin: loggedDev.likes } }, //Não esteja dentro de uma lista
                { _id: { $nin: loggedDev.dislikes } }, //Não esteja dentro de uma lista
            ],
        })

        return res.json(users);
    },

    //Criar dev
    async store(req, res){
        //console.log(req.body.username)
        const { username } = req.body;

        //Verificar se já não existe o usuário
        const userExists = await Dev.findOne({ user: username });
        if (userExists) {
            return res.json(userExists);
        }

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