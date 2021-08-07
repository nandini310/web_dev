// npm i request
//let url =" https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";
let request = require("request");
let cheerio = require("cheerio");
// for extracting of data from any website 
console.log("Before");
request('https://www.npmjs.com/package/cheerio' , cb);
function cb(error , response , html){
    // console.error('error:' , error); // print the error if one occured.
    // console.log('body:' , html);// print html gor the google homepage.
    if(error){
        console.log(error);// print error if one occured
    }else if(response.statusCode== 404 ){
        console.log("page not found");
    }else{
        console.log(html);
        //console.log("html:",);
        dataExtractor(html);
    }
}
function dataExtractor(html){
let searchTool = cheerio.load(html);
// css -> selector element 
let elemrep = searchTool("._50685029.truncate");
//text
let moduleName = elemrep.text().trim();
console.log("moduleName",moduleName);
}
console.log("After");
