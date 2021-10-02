const { Op } = require('sequelize')
const {Country, Activity} = require('../db');


const getCountries = async (req, res) => {
    try {
        const { name }= req.query;
        if(!name){
        const countries = await Country.findAll({
            include: {
                model: Activity
            }
        })
        res.json(countries)
    }else{
        //console.log(name);
        const countrySearch = await Country.findAll({
            where: {
                name:   {[Op.iLike]: `%${name}%`},
            }
        })
        if(countrySearch.length > 0){
            res.json(countrySearch);
        }else{
            res.status(404).send("Country not found");
        }
        

    }
        
    } catch (error) {
        console.error(error);
    }
}

const getCountryId = async (req, res) => {
    try {
        const { id } = req.params
        const country = await Country.findByPk(id.toUpperCase(), {
            include:{
                model: Activity,
                //attributes: ['name', 'difficulty', 'duration', 'season'],
                // through: {
                //     attributes: []}},
                    
        }
        })
        res.json(country)
    } catch (error) {
        console.error(error);
    }
}

// const getCountryQuery = async (req, res) => {
//     try {
//         console.log("me ejecute")
//         const {name} = req.query;
//         console.log(name);
//         const country = await Country.findAll({
//             where: {
//                 name:   {[Op.iLike]: `%${name}%`},
//             }
//         })
//         res.json(country);
//         // let countryTotal = await Country();
//         // if(name){
//         //     let countryName = await countryTotal.filter(country => country.name.toLowerCase().include(name.toLowerCase()));
//         //     //console.log(countryName);
//         //     countryName.length ?
//         //     res.status(200).send(countryName) :
//         //     res.status(404).send('The country cannot be found');
//         // }else{
//         //     res.status(200).send(countryTotal);
//         // }

//     } catch (error) {
//         console.error(error);
//     }
// }

module.exports = {
    getCountries,
    getCountryId,
    //getCountryQuery
}