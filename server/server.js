// var express = require('express')
// var path = require('path')
// var open = require('open')
// var webpack = require('webpack')
// var config = require('../webpack.config')

// // import express from 'express';
// // import path from 'path';
// // import open from 'open';
// // import webpack from 'webpack';
// // import config from '../webpack.dev.config';
// const compiler = webpack(config);
// const port = 3000;
// const app = express();

// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
// }));
//  app.listen(port, function (error) {
//     if(error) {
//         console.log(error);
//     } else {
//         open(`http://localhost:${port}`)
//     }
// });

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '../index.html'));
// });

const bp = require('body-parser');
const express = require('express');
const fs = require('fs');
const app = express();

app.use(bp.urlencoded({ extended:true}));
app.use(bp.json());



app.use(express.static('./serverData/images'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});



app.get('/', function(req, res){
    res.send("Herer");
});

app.get('/home', function(req, res){
    fs.readFile("./serverData/data.json",'utf-8',  (error ,data)=>{
        var r = error?error:data;
        res.send(JSON.parse(r));
    });
})

app.get('/details/:id', function(req, res){
  
   fs.readFile("./serverData/data.json",'utf-8',  (error ,data)=>{
     
        data=JSON.parse(data);
       // console.log(data[1]); 
       var id=parseInt(req.params.id);
       
        var r = error?error:data[--id];
    
        res.json(r);
   });
})
app.post('/items',  function  (req,  res) {

  fs.readFile('src/assets/json/db.json', 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      var jsonObject = JSON.parse(data);
      req.on('data',  function (obj1) {
        var buf = new Buffer.from(obj1);
        console.log(buf)
        jsonObject.techies.push(JSON.parse(buf)) //add some data body = ;

          });
      req.on('end',  function  () {

        json = JSON.stringify(jsonObject); //convert it back to json
        fs.writeFile('src/assets/json/db.json', json, 'utf8', function (err) {
          if (err)
            throw err
          console.log("done")
        }); // write it back 
          })
    }

  })
})


app.post('/update' , function(req,resp){

    let r= req.body;
     console.log("_________body__________");
    console.log(req.originalUrl);
     console.log(req.body);
    let respObj={};
 fs.readFile("./serverData/data.json",'utf-8',  (error ,data)=>{ 

    if(error){
        resp.send(JSON.parse(error));
    }else{
    //     let jsonData= JSON.parse(data);
    //     jsonData.map( (item) => {
              
    //         if(item.id==r.id){
    //             item.title= r.title;
    //             item.details.name = r.name;
    //             item.details.company=r.company;
    //             item.details.age= r.age;

    //             respObj.id=r.id;
    //             respObj.title=r.title;
    //             respObj.url = r.url;
    //             respObj.details.age =r.age;
    //             respObj.details.name= r.name;
    //             respObj.details.company=r.company;
    //         }
    //         return item;
    //     })

    //     console.log("___________________");
    //     console.log(respObj);
    //    console.log("___________________");


    //     fs.writeFile("./serverData/data.json", JSON.stringify(jsonData),(err)=>{

    //         if(err){
    //             resp.send({
    //                 status:"ERROR"
    //             });
    //         } else{
    //             resp.send({
    //                 status: 'OK',
    //                 item: respObj
    //             })
    //         }
    //     } )

        var result;
      var jsonObject = JSON.parse(data);
      req.on('data', function (obj1) {
    console.log("__________obj1___________");
    console.log(obj1);
    console.log("___________________");
        var techieData = JSON.parse(new Buffer.from(obj1))
        var filteredArray =  jsonObject.map(techie => {
          if (techie.id === techieData.id) {
            techie = techieData;
            result=techie;
 console.log("_________  techie ___________");
    console.log(            techie );
     console.log("_________  techie ata");
     console.log(            techieData );
    console.log("___________________");
          }
            
          return techie
        })
        jsonObject= filteredArray;
      });
      req.on('end', function () {
        json = JSON.stringify(jsonObject); //convert it back to json
        fs.writeFile('./serverData/data.json', json, 'utf8', function (err) {
          if (err)
            throw err
          console.log("done")
          resp.send(result);
   
      })
    } )

    }
 })
     
     
})

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 8080!\n');
})
