// const express = require("express")
// const app = express()
// const cors = require("cors") 

// app.use(cors({
//   origin : "http://127.0.0.1:5500/"
// }))


// app.get("/data", (req, res)=>{
//   res.json()
// })

// app.listen(3000)
// app.use(cors({
//     origin: "http://api.wolframalpha.com/v2/query?input=pi&appid=LYP6W3-RA74GPRGY2"
// }))

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function (){
//     if(this.readyState == 4 && this.status == 200) {
//         console.log (xhttp.responseText);
//     }else {
//         console.log("error")
//     }
// } 
// xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://api.wolframalpha.com/v2/query?input=pi&appid=LYP6W3-RA74GPRGY2");
// xhttp.send();

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://api.wolframalpha.com/v2/query?input=pi&appid=LYP6W3-RA74GPRGY2"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI('LYP6W3-RA74GPRGY2');

// waApi.getFull('sin x').then(console.log).catch(console.error);
waApi.getShort("sin(30)").then(console.log).catch(console.error);