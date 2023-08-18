const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('49d9bdd4fd0f422ca75268a72840ac67');



newsapi.v2.topHeadlines({
    category: 'sports',
    language: 'en' 
}).then(response =>{
    console.log(response);
});






//   const units = "metric";
//   const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ appid +"&units="+units;
//   const uu = "https://newsapi.org/v2/everything?q="+ query +"&sortBy=publishedAt&apiKey="+appid;
//   https.get(url,function(response){
//     console.log(response.statusCode);

//     response.on("data",function(data){
//       const wheatherData = JSON.parse(data);
//       const temp = wheatherData.main.temp;
//       const description = wheatherData.weather[0].description;
//       const icon = wheatherData.weather[0].icon;
//       const url = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
//       res.write("<h1>The description of Wheather is " + description+"</h1>");
//       res.write("the temperature in "+query+" is "+ temp + " degree Celsius");
//       res.write("<img src="+url+">");
//       res.send();
//     })

//   });