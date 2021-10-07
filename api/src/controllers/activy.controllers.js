const {Country, Activity} = require('../db');


const postActivity = async (req, res) => {
    try {
        
        const {name, difficulty, duration, season, countries } = req.body;
        const activity = await Activity.create({name, difficulty, duration, season})
        activity.setCountries(countries)
        res.json(activity);

    } catch (error) {
        console.error(error);
    }

};

const getActivity = async (req, res) => {
    try {
        //const {name, difficulty, duration, season, countries } = req.body;
        const activity = await Activity.findAll()
        
        res.json(activity)
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    postActivity,
    getActivity
}