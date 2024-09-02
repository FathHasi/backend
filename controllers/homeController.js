const Home = require("../model/homeModel")

const getAllHomes = async(req, res) => {
 const homes = await Home.find(req.query);
    res.json(homes)
  }

  const getHomeById = async (req, res) => {
    const home = await Home.findById(req.params.homeId).exec();

    res.json(home)
  }

  const addHomes = async(req, res) => {
    //get data from req body
    const data = req.body
    // create a document
    const home = new Home(data);
    //save document
    await home.save();
    res.json(home)
  }

  const editHome = async (req, res) => {
   const editedHome = await Home.findByIdAndUpdate(req.params.homeId, req.body, {new: true})
    res.json(editedHome)
  }

  const deleteHome =  (req, res) => {
    Home.findOneAndDelete(req.params.homeId)
    res.send('Got a DELETE request at /user')
  }

  module.exports = {
    getAllHomes,
    getHomeById,
    addHomes,
    editHome,
    deleteHome
  }