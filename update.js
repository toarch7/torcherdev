const MAX_VALUE = Math.pow(2, 31) - 1;
const API_URL = process.env.API_URL;

const axios = require("axios");
const fs = require("fs");

let currentTime = new Date();
let nextTime = new Date();
nextTime.setDate(nextTime.getDate() + 1);
nextTime.setHours(0, 0, 0, 0);

let data = {
    seed: Math.floor(Math.random() * MAX_VALUE),
    time: (nextTime.getTime() - currentTime.getTime()) / 1000
}

fs.writeFileSync("dailydata.json", JSON.stringify(data));

if (API_URL) {
    
    axios.get(API_URL + "seed/weekly")
        .then(res => {
            let loadout = res.data;

            console.log(loadout);

            if (!loadout.active || loadout.active == "false" || !loadout.char)
                return;
            
            let data = {
                name: loadout.name,
                
                char: parseInt(loadout.char),
                crown: parseInt(loadout.crown),
                bskin: parseInt(loadout.bskin),
                startwep: parseInt(loadout.startwep),
                bstartwep: parseInt(loadout.bstartwep),
                startcursed: parseInt(loadout.startcursed),
                bstartcursed: parseInt(loadout.bstartcursed),
                
                seed: parseInt(loadout.seed),
                time: parseInt(loadout.time),
            }
            
            fs.writeFileSync("weeklydata.json", JSON.stringify(data));
            
        })
        .catch(() => {
            
        });
    
}
