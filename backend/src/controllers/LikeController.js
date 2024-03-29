const Dev = require('../models/Dev');

module.exports = {
  async store(req, res){
    // console.log(req.params.devID);
    // console.log(req.headers.user);
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if (!targetDev){
      return res.status(400).json({ error: 'O Dev Não Existe'})
    }

    if (targetDev.likes.includes(loggedDev._id)){
      console.log('Deu Match');
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
};