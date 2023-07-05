const MAX_VALUE = Math.pow(2, 31) - 1;
const fs = require("fs");

const data = {
    seed: Math.floor(Math.random() * MAX_VALUE)
}

fs.writeFileSync("dailydata.json", JSON.stringify(data));