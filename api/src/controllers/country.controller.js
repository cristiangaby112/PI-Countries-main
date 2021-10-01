const {Country, Activity} = require('../db');
const getCountries = async (req, res) => {
    try {
        const countries = await Country.findAll()
        res.json(countries)
    } catch (error) {
        console.error(error);
    }
}

const getCountry = async (req, res) => {
    try {
        const { id } = req.params
        const country = await Country.findByPk(parseInt(id, 10))
        res.json(country)
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getCountries,
    getCountry,
}