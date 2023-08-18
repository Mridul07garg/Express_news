const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')


newsr.get('/',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=49d9bdd4fd0f422ca75268a72840ac67';

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

newsr.post('/',async(req,res)=>{
    const search=req.body.search
    //console.log(req.body.search)
    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=49d9bdd4fd0f422ca75268a72840ac67`
        const news_get =await axios.get(url)

        res.write("<h1>"+news_get.data.article.title+"</h1>");
        res.send();
        // res.render('news',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})


index.listen(3000,function(){
  console.log("Server is running");
})