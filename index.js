// const {cpu} =  require('./module/cpu.js');




const axios = require('axios');
const fs = require("fs");

const url = 'http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bbbc8e17bf070c27202f44f3e71c04e6';

async function weahter(){
    const  response = await axios.get(url);
    const data =  await response.data;
    const  temp =  data.main.temp - 273;
    const date = Date(data.dt).toString()
    fs.writeFileSync("result.txt", `Дата: ${date}, температура: ${temp}`)
  

}


setInterval(weahter,900000)

