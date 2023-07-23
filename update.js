const MAX_VALUE = Math.pow(2, 31) - 1;
const API_URL = process.env.API_URL;

const axios = require("axios");
const fs = require("fs");


let data = {
    seed: Math.floor(Math.random() * MAX_VALUE)
}

fs.writeFileSync("dailydata.json", JSON.stringify(data));

if (API_URL) {
    console.log(API_URL);
    axios.get(API_URL + "seed/weekly")
        .then(res => {
            let loadout = res.data;

            if (!loadout.active)
                return;
            
            let data = {
                char: parseInt(loadout.char),
                crown: parseInt(loadout.crown),
                bskin: parseInt(loadout.bskin),
                startwep: parseInt(loadout.startwep),
                
                seed: parseInt(loadout.seed)
            }
            
            fs.writeFileSync("weeklydata.json", JSON.stringify(data));
            
        })
        .catch(() => {
            
        });
    
}
