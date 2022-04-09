var unirest = require("unirest")

var request = unirest("GET", "http://localhost:3000/Livraison")

request.headers({
    "cache-control": "no-cache", //Indique de renvoyer systématiquement la requête au serveur et ne servir une éventuelle version en cache que dans le cas où le serveur le demande
})

request.end(function(response){
    if (response.error) throw new Error(response.error)
    console.log(res.body)
})
