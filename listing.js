var unirest = require("unirest")

var req = unirest("GET", "http://localhost:3000/Livraison")

req.headers({
    "cache-control": "no-cache", //Indique de renvoyer systématiquement la requête au serveur et ne servir une éventuelle version en cache que dans le cas où le serveur le demande
})

req.end(function(res){
    if (res.error) throw new Error(res.error)
    
