const MAX_VALUE = Math.pow(2, 31) - 1;

process.env.API_URL = 12345;

const API_URL = process.env.API_URL;

const axios = require("axios");
const fs = require("fs");

console.log(API_URL);


let data = {
    seed: Math.floor(Math.random() * MAX_VALUE)
}

fs.writeFileSync("dailydata.json", JSON.stringify(data));

if (API_URL) {
    
    axios.get(API_URL + "seed/weekly")
        .then(res => {
            let loadout = res.data;

            if (!loadout.active)
                return;
            
            let data = {
                char: parseInt(loadout.char),
                crown: parseInt(loadout.char),
                bskin: parseInt(loadout.char),
                startwep: parseInt(loadout.char),
                
                seed: parseInt(loadout.char)
            }
            
            fs.writeFileSync("weeklydata.json", JSON.stringify(data));
            
        })
        .catch(() => {
            
        });
    
}
