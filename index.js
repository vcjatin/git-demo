const { fstat } = require("fs");
const http = require("http");
const url = require("url");
const fs = require("fs");

// access file data
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

// SERVER 🙈
const server = http.createServer((req, res) => {
  const path = req.url;
  if (path === "/" || path === "/overview") {
    res.end("this is overview!");
  } else if (path === "/api") {
    // const folderPath = './dev-data/data.json'
    // const productData = fs.readdirSync(folderPath)
    //   console.log(productData);
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
    });

    res.end("<h1> Page not Found! </h1>");
  }
  console.log(path);

});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listensing from server! 👂");
});
