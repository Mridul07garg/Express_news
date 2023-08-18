const express = require("express");
const bodyparser = require("body-parser");
const NewsAPI = require('newsapi');
const axios = require('axios');
const newsr=express.Router();
const moment = require('moment')
const math = require('math')
const { log } = require("console");
const newsapi = new NewsAPI('49d9bdd4fd0f422ca75268a72840ac67');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",async(req,res)=>{
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


app.post("/",async function(req,res){


//   const query = req.body.category;
//   const appid = "49d9bdd4fd0f422ca75268a72840ac67";
// //   const url = "https://newsapi.org/v2/top-headlines?category="+query+"&language=en&sortBy=publishedAt&apiKey=49d9bdd4fd0f422ca75268a72840ac67";
// //   console.log(query);
// //   console.log(url);
// //   https.get(url,function(response){
// //      console.log(response.statusCode);
// //     //  response.on("data",function(data){
// //     //     const newdata = JSON.parse(data);
// //     //     const author = newdata.ar;
// //     //     console.log(author);
// //     //     res.write("<h1>hye</h1>");
// //     //     res.write("Auhor is :"+author);
// //     //     res.send();
// //     //  })
// //     });

//     newsapi.v2.topHeadlines({
//         category: query,
//         language: 'en' 
//     }).then(response =>{
//         console.log(response);
        
//     });


const search=req.body.category;
console.log(req.body.category);
try {
    
    const news_get =await axios.get(url);
    console.log(news_get.data.article[1].title);
    res.render('news',{articles:news_get.data.articles})

} catch (error) {
    if(error.response){
        console.log(error)
    }

}

})

app.post('/search',async(req,res)=>{
  const search=req.body.search
  //console.log(req.body.search)


  try {
    var url = 'http://newsapi.org/v2/everything?q='+search+'&apiKey=49d9bdd4fd0f422ca75268a72840ac67';
      const news_get =await axios.get(url)
      res.render('news',{articles:news_get.data.articles})





  } catch (error) {
      if(error.response){
          console.log(error)
      }

  }
})


app.get('/news/:category',async(req,res)=>{
  var category = req.params.category;
  try {
      var url = 'http://newsapi.org/v2/top-headlines?country=in&category=' + category + '&apiKey=49d9bdd4fd0f422ca75268a72840ac67';

      const news_get =await axios.get(url)
      res.render('category',{articles:news_get.data.articles})

  } catch (error) {
      if(error.response){
          console.log(error)
      }

  }
})

app.get

module.exports=app

app.set('views','./views'); 

app.listen(3000,function(){
  console.log("Server is running");
})
