var fs = require("fs");

// create an async file using fs.writeFile(): takes file path(name), data as string, callBack function(errors)
fs.writeFile("read.txt", "abc", (er) => {
  console.log("hello", er); 
});

fs.readFile("read.txt",  (er,data) => {
  console.log(data.toString());
});
