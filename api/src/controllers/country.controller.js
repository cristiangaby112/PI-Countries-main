const { Op } = require('sequelize')
const {Country, Activity} = require('../db');


const getCountries = async (req, res) => {
    try {
        const { name, pages, order, filter }= req.query;
        if(!name){
        const countries = await Country.findAll({
            // limit: 10,
            include: {
                model: Activity
            }
        })
        res.status(200).json(countries)
        } 
        else if(name){
            console.log(name);
            const countrySearch = await Country.findAll({
                where: {
                    name:   {[Op.iLike]: `%${name}%`},
                },
                include: {
                    model: Activity
                }
            })
            if(countrySearch.length > 0){
                res.json(countrySearch);
            }else{
                res.status(404).send("Country not found");
            }
        }
        // else if(countries){
        //     console.log(countries);
        //     const countrySearch = await Country.findAll({
        //         where: {
        //             countries:   {[Op.iLike]: `%${name}%`},
        //         },
        //         include: {
        //             model: Activity
        //         }
        //     })
        //     if(countrySearch.length > 0){
        //         res.json(countrySearch);
        //     }else{
        //         res.status(404).send("Country not found");
        //     }
        // }
        // else if(filter){
        //     //console.log("esto es filter", filter)
        //     const filters = await Country.findAll({
        //         where:{
        //             region: {[Op.iLike]: `%${filter}%`},
        //         },
        //     })
        //         res.json(filters);
            
        // }
        // else if(order){
        //     const countries = await Country.findAll({
        //         limit: 10,
        //         offset: pages,
        //         order: [
        //             ['name' || 'population', order],
        //             //['population', order]
                    
        //         ],
        //         include: {
        //             model: Activity
        //         }
        //     });
        //     res.json(countries);
        // }else{
        //     const countries = await Country.findAll({
        //         limit: 10,
        //         offset: pages,
        //         include: {
        //             model: Activity
        //         }
        //     })
        //     res.json(countries)
        // }
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




module.exports = {
    getCountries,
    getCountryId
}