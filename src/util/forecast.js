const request=require('request')

const forecast=(latitude,longitude,callback)=>{
const url='http://api.weatherstack.com/current?access_key=f4b9db39a7a4a36c0955a1a7a56e60d6&query=' +longitude+','+latitude+'&units=m' 
request({url,json:true},(error,{body})=>{
    if(error){
        callback('unable to connect to location services!',undefined)
    }else if(body.error)
    {
        callback('unable to find location try another search',undefined)
    }else{
        callback('undefined',"Seems "+ body.current.weather_descriptions[0]+ " It is currently " + body.current.temperature+ "degree celsius out and it feels like "+ body.current.feelslike+" degrees celsius out")
    }
})


}

module.exports=forecast