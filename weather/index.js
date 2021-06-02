




const axios = require('axios');
const fs = require("fs");
const url = 'http://api.openweathermap.org/data/2.5/forecast/?q=Kyiv&units=metric&cnt=6&appid=bbbc8e17bf070c27202f44f3e71c04e6';

async function weahter(){
    const  response = await axios.get(url);
     const data =  await response.data;
     const list =  await data.list;
     const tomorrow = list[5];
     const  date = tomorrow.dt_txt;
     const temp = tomorrow.main.temp;
    

       
        fs.appendFile('result.txt', `Дата: ${date}, температура: ${temp} \n`, err => {
            if (err) {
              console.error(err)
              return
            }
            
          })
        
  
   

  

}

weahter();
 setInterval(weahter,900000)

