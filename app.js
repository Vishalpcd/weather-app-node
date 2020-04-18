const request=require('request');
const url='http://api.weatherstack.com/current?access_key=be3c314d1d42448ce7a052d978805f0e&query=Mumbai';

request({url:url,json:true},(error,response)=>{

    console.log(response.body.current.temperature);
});