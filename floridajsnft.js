const http = require("http"); // standard http server
const express = require("express"); // express library
const path = require("path"); // express has a method for using local path. but now.sh doesn't like it.
const app = express(); // Express server (we seperate to introduce middleware) you could also do: app = require("express")()
const port = process.env.PORT || 8080; // use any port you want or use a enviromental PORT variable
app.use(express.json()); // Now express no longer needs the body-parser middleware and has it's own.
app.set('view engine', 'ejs'); // I choose the "EJS" view engines. Other popular are hbs, pub and hogan
app.set("views", path.join(__dirname, `/views`)); // specify the location of the "views". NOT needed for dev but NOW.SH needs it
const mint = require("./mint")
const mintedaddress= [];

app.get("/",(req,res)=> {
    res.render('index.ejs'); // open the /views/index.ejs file and pass an object called "HelloWorld"
  });

// example of a POST from the front page.
app.post("/mint/:addr", async (req,res) => {
    let addr = eq.params.addr; // the "name" input field from the front page
    if (!mintedaddress.contains(addr)) {
    console.log("minting to:",addr);
    mintedaddress.push(addr);
    await mintedaddress.mint(addr);
    res.json({"success":"true"});
  } else {
    res.json({"error":"One per customer. It costs me money buddy!"});
  }
 });

// start the web server.
let server = http.createServer(app);
server.listen(port);
console.log("http server listening on http://localhost:%d", port); // this is a good idea and will remind you which port it's listening to.
