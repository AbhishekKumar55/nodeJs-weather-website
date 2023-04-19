const geocode=require('./util/geocode')
const forecast=require('./util/forecast')



const path=require('path')
const express=require('express')
const hbs=require('hbs')


const app=express()

//Define paths for Express config
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../template/views')
const partialsPath=path.join(__dirname,'../template/partials')

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Abhishek kumar'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
    name:' abhishek kumar'    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
helptxt:'i need help',
title:'help',
name:'Abhishek kumar'
    })
})


app.get('/weather',(req,res)=>{
if(!req.query.address){
return res.send({
    error:'Provide a valid address'
})
}
geocode(req.query.address,(error,{longitude,latitude,location}={})=>{
    if(error)
    {
        res.send({
            error:error
        })
    }
    forecast(longitude,latitude,(error, forecastData)=>{
        if(error !== 'undefined'){
            res.send({
                error:error
            })
        }
res.send({
    address: req.query.address,
    forceast:forecastData,
    location
})
    })
})
})

app.get('/product',(req,res)=>{
    if(!req.query.search){
return res.send({
    error:'You must provide a search term'
})
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
}
)


app.get('/help/*',(req,res)=>{
    res.render('404page',{
        title:'404',
        error:'Help article not found',
    name:'Abhishek kumar'
})
})

app.get('*',(req,res)=>{
res.render('404page',{
    title:'404',
    error:'Page not found',
    name:'Abhishek kumar'
})
})



app.listen(3000,()=>{
    console.log('server is up on port 3000.')
})