const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.resolve(__dirname, "./public")

app.listen(3000, () =>
    console.log("Servidor corriendo")
);

app.use(express.static(publicPath));

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/login", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.get("/register", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})