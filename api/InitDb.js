const fs = require('fs');
const {Activity, Country}= require('./src/db')

const db = async() => {
    // const data = fs.readFile('countries.json', 'utf8');
    // console.log(data);
    try {
        fs.readFile('countries.json', async(err, data) => {
            const countries = JSON.parse(data);
            //console.log(countries);
            for(let country of countries) {
                    await Country.create({
                        id: country.alpha3Code,
                        name:country.name,
                        region: country.region,
                        capital: country.capital,
                        image: country.flag,
                    })
                    
            }
        });
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = db;