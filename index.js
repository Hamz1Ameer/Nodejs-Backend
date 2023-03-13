// // Node JS challenge :2

// var fs = require("fs");

// var ameerDir = "./Ameer";
// fs.mkdir(ameerDir, (er) => {
//   console.log(`${ameerDir} is created`);
// });

// fs.writeFile("./Ameer/bio.txt", "Ameer new file", (err) => {
//   console.log(("file created", err));
// });

// fs.appendFile(
//   "./Ameer/bio.txt",
//   ". This data is added using append method",
//   (err) => {
//     console.log("data Added", err);
//   }
// );

// fs.readFile("./Ameer/bio.txt", (err, data) => {
//   console.log(data);
// });

// fs.readFile("./Ameer/bio.txt", "UTF-8", (err, data) => {
//   console.log(data);
//   // console.log(data.toString());
// });

// fs.rename("./Ameer/bio.txt", "./Ameer/newBio.txt", (err) => {
//   console.log(err);
// });

// fs.unlink("./Ameer/newBio.txt", (err) => {
//   console.log(err);
// });

// fs.rmdir("./Ameer", (err) => {
//   console.log(err);
// });

// const http = require("http");

// const options = {
//  hostname: "www.google.com",
//  path: "/",
//  method: "GET",
// };

// const req = http.request(options, (res) => {
//   console.log(`Status: ${res.statusCode}\n`);
//   console.log(`Headers: ${JSON.stringify(res.headers)}`);

//   res.setEncoding("utf8");
//   res.on("data", (chunk) => {
//     console.log(`\nBody: ${chunk}`);
//   });
//   res.on("end", () => {
//     console.log("No more data in response.");
//   });
// });

// req.on("error", (e) => {
//   console.error(`problem with request: ${e.message}`);
// });

// req.end();

// import chalk from 'chalk';

// Operating System(OS) module
// var os = require("os");
// console.log(os.arch());

// const fmem= os.totalmem();
// const fmem= os.freemem();

// const os = require('os');

// console.log(os.hostname());  // 'Innovapaths-Mac-mini-3.local'
// console.log(os.type());  // 'Darwin' (on macOS)
// console.log(os.platform());  // 'darwin' (on macOS)
// console.log(os.arch());  // 'x64'
// console.log(os.release());  // '22.2.0'
// console.log(os.uptime());  // 2848 (in seconds)
// console.log(os.loadavg());  // [ 2.55029296875, 2.115234375, 2.5302734375 ]
// console.log(os.totalmem());  // 8589934592 (in bytes)
// console.log(os.freemem());  // 17387520 (in bytes)
// console.log(os.cpus());  // [{...}, {...}, ...]

// Events module:
// const EventEmitter = require("events");
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on("event", () => {
//   console.log("An event occurred!");
// });
// myEmitter.emit("event"); // 'An event occurred!'

// <!---->
// // we can also register event with call back parameters.
// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();

// myEmitter.on("checke", (sc, dis) => {
//   console.log(`An event occurred! www.google.com ${sc}, ${dis}`);
// });

// myEmitter.emit("checke", 200, "ok"); // 'An event occurred!'

//-----------

// // It is example for user custom modules, It uses greet.js file to read greet function and returns the output
// const greet = require("./greet"); // commonjs
// // import {greet} from './greet.js' // module
// console.log(greet("Alice")); // 'Hello, Alice!'

// NPM module:
// var sh=require('superheroes-name');
// console.log((sh.random()));

// import anime from 'animejs/lib/anime.es.js';
// const Anime_Images = require("anime-images-api");
// const API = new Anime_Images();
// async function getIMG() {
//   let { image } = await API.sfw.kill();
//   console.log(image);
// }
// getIMG();
// //Or get an NSFW Image:
// getNSFWImg();
// async function getNSFWImg() {
//   let { image } = await API.sfw.kill();
//   console.log(image);
// }

// import lodash from "lodash";
// console.log(lodash.capitalize("hello")); // 'Hello'

//http Example server:
// const http = require('http');
// import http from "http";

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, World!");
// });
// let a = 3000;
// server.listen(a, () => {
//   console.log("The server is listening on port 3000");
//   console.log(`http://localhost:${a}`);
// });

// const math = require('./math');
// import maths from "./math.js";

// console.log(maths.PI); // 3.14
// console.log(maths.add(1, 2)); // 3
// console.log(maths.subtract(5, 3)); // 2

// const path = require('path');

// const filePath = '/path/to/my/file.txt';

// console.log(path.dirname(filePath));  // '/path/to/my'
// console.log(path.basename(filePath));  // 'file.txt'
// console.log(path.extname(filePath));  // '.txt'

// const newPath = path.join('/path/to', 'my', 'file.txt');
// console.log(newPath);  // '/path/to/my/file.txt'

// const normalizedPath = path.normalize('/path/to/../my/./file.txt');
// console.log(normalizedPath);  // '/path/my/file.txt'

// console.log(path.parse(filePath));// { root: '/',  dir: '/path/to/my',  base: 'file.txt',  ext: '.txt',  name: 'file' }

// URL module
// const url = require("url");

// const myUrl = "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash";
// const parsedUrl = url.parse(myUrl);
// console.log(parsedUrl);

// console.log(parsedUrl.protocol); // 'https:'
// console.log(parsedUrl.auth); // 'user:pass'
// console.log(parsedUrl.host); // 'sub.example.com:8080'
// console.log(parsedUrl.hostname); // 'sub.example.com'
// console.log(parsedUrl.port); // '8080'
// console.log(parsedUrl.pathname); // '/p/a/t/h'
// console.log(parsedUrl.query); // 'query=string'
// console.log(parsedUrl.hash); // '#hash'

// const formattedUrl = url.format(parsedUrl);
// console.log(formattedUrl); // 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'

//

// routing using node
// const http = require("http");
// var a = 3000;
// const serv = http
//   .createServer((req, res) => {
//     console.log(req.url);
//     if (req.url == "/home" || req.url == "/") {
//       res.end("<h1>Hello home</h1>");
//     } else if (req.url == "/about") {
//       res.end("<h1>Hello about</h1>");
//     }
//     else{
//         res.writeHead(404, {"content-type" : "text/html" })
//         res.end("<h1>404 Error</h1>");
//     }
//   })
//   .listen(a, () => {
//     console.log(`running on local server: ${a}`);
//   });

// const http = require('http')

// import http from 'http'

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World\n')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`) })

// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "content-type": "text/html" }).end();
//     res.write("hello world");
//     console.log(req.url);

//   })
//   .listen(3000);

// const http = require('http');

// const options = {
//     hostname: 'www.google.com',
//     port: 80,
//     path: '/',
//     method: 'GET'
// };

// const req = http.request(options, (res) => {
//     console.log(`statusCode: ${res.statusCode}`);
//     res.on('data', (d) => {
//         process.stdout.write(d);
//     });
// });

// req.end();

// const express = require('express');
// const app = express();

// // Define a route for the homepage
// app.get('/', (req, res) => {
//   res.send('Welcome to the homepage');
// });

// // Define a route for the about page
// app.get('/about', (req, res) => {
//   res.send('About page');
// });

// // Define a route for the contact page
// app.get('/contact', (req, res) => {
//   res.send('Contact page');
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });

// // routing using node
// const http = require("http");
// var a = 3000;
// const serv = http
//   .createServer((req, res) => {
//     console.log(req.url);
//     if (req.url == "/home" || req.url == "/") {
//       res.end("<h1>Hello home</h1>");
//     } else if (req.url == "/about") {
//       res.end("<h1>Hello about</h1>");
//     }
//     else{
//         res.writeHead(404, {"content-type" : "text/html" })
//         res.end("<h1>404 Error</h1>");
//     }
//   })
//   .listen(a, () => {
//     console.log(`running on local server: ${a}`);
//   });

// const express = require('express');
// const app = express();
// const url= require('url');

// // Define a simple route for the root URL
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Define a route for a specific URL
// app.get('/users/:id', (req, res) => {
//   const id = req.params.id;
//   const users = req.users;

//   res.send(`The id you specified is ${req.params.user}${id}`);
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

// const express = require('express');
// const app = express();

// // Handle GET requests
// app.get('/home', (req, res) => {
//     // logic to handle get request
//     res.send('Get')
// });

// // Handle POST requests
// app.post('/home', (req, res) => {
//     // logic to handle post request
//     res.send('POST')
// });

// // Handle PUT requests
// app.put('/home', (req, res) => {
//     // logic to handle put request
//     res.send('PUT')
// });

// // Handle DELETE requests
// app.delete('/home', (req, res) => {
//     // logic to handle delete request
//     res.send('DELETE')
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

// const express = require("express");
// const app = express();

// app.all("/home", (req, res) => {
//   res.send('Tested for all')
// });

// app.listen(3000, () => {
//   console.log("Server listening on port 3000");
// });

// const EventEmitter = require("events");
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on("event", () => {
//   console.log("An event occurred!");
// });
// myEmitter.emit("event"); // 'An event occurred!'

// we can also register event with call back parameters.
// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();
// myEmitter.on("checke", (sc, dis) => {
//   console.log(`An event occurred! ${sc}, ${dis}`);
// });
// myEmitter.emit("checke", 200, "ok"); // 'An event occurred! 200, ok'