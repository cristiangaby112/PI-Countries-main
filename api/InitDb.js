const fs = require('fs');
const {Activity, Country}= require('./src/db')

const db = async() => {
    // const data = fs.readFile('countries.json', 'utf8');
    // console.log(data);
    try {
				const country = await Country.findAll()
				if(country.length === 0) {
        fs.readFile('countries.json', async(err, data) => {
            const countries = JSON.parse(data);
            //console.log(countries);
            for(let country of countries) {
                //console.log(country.capital, country.name)
                    await Country.create({
                        id: country.alpha3Code,
                        name:country.name,
                        region: country.region,
                        capital: country.capital ? country.capital : country.name,
                        image: country.flag,
                        subregion: country.subregion,
                        area: country.area,
                        population: country.population,
                    })
                    
            }
        });
    }
	}
    catch (err) {
        console.log(err);
    }
}

module.exports = db;