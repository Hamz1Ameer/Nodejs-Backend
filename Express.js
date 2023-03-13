// Express JS
const express = require("express");
const app = express();

app
  .get("/", (req, res) => {
    res.send("Hello World!");
  })
  .listen(3000, () => {
    console.log("API listening on port 3000");
  });


  
//   app.get('/', (req, res) => {
//     res.send('This is a GET request')
//   })

//   // POST request to '/'
//   app.post('/post', (req, res) => {
//     res.send('This is a POST request')
//   })

//   // PUT request to '/'
//   app.put('/', (req, res) => {
//     res.send('This is a PUT request')
//   })

//   // DELETE request to '/'
//   app.delete('/', (req, res) => {
//     res.send('This is a DELETE request')
//   })

//   app.listen(3000, ()=>{
//     console.log('hello');
//   })
