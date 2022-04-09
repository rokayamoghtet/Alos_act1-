import express from "express";
import { v4 as uuidv4} from "uuid";
uuidv4();
const router = express.Router();

let Livraison=[
  {
      "Track":"1Z535W02689" ,
      "Service_UPS":"UPS Standard",
      "Poids":"3,96 Kg",
      "Adresse":"13000 Marseille France",  
      "DateLivré":"12-06-2005",
      "TempsLivré":"10:14:50",   
      "Signé":"MAGUIRE J"
  },
  {
      "Track":"1Z111111111" ,
      "Service_UPS":"UPS Ground",
      "Poids":"2,00 Kg",
      "Adresse":"100 rue des fleur Paris France ",  
      "DateLivré":"21-06-2006",
      "TempsLivré":"14:30:02",   
      "Signé":"AMBROSE"
  },
  {
      "Track":"1Z55555555555" ,
      "Service_UPS":"UPS Standard",
      "Poids":"19,00 Kg",
      "Adresse":"Dharma Paris France",  
      "DateLivré":"01-08-2010",
      "TempsLivré":"11:40:20",   
      "Signé":"Rivers"
  }
]

router.get("/Livraison" , (request , response)=>{
  response.json(Livraison);
});

router.get("/Livraison/:Track", (request ,response)=>{
  const Track =request.params.Track;
  const Livraisonc= Livraison.find((Livraison) => Livraison.Track == Track);
  if(Livraison){
  response.json(Livraison);
  } else
  {
    response.send("Livraison not found");
  }
});

router.delete("/:Track", (request ,response)=>{
  const Track =request.params.Track;
  const Livraisonc= Livraison.find((Livraison) => Livraison.Track !== Track);
  response.send("Livraison with Track ${Track} has been deleted");
});

router.post("/:Track", (request ,response)=>{
  Livraison.push(request.body);
  response.send(" Livraison with Track ${request.body.Track} has been added");
});

router.patch("/:Track", (request ,response)=>{
  const Track =request.params.Track;
  const { Service_UPS , DateLivré ,TempsLivré } = request.body;
  let Livraisonc= Livraison.find((Livraison) => Livraison.Track == Track);
  if(Service_UPS){
     Livraison.Service_UPS = Service_UPS;    
  }
  if(DateLivré){
    Livraison.DateLivré = DateLivré;    
 }
 if(TempsLivré){
  Livraison.TempsLivré = TempsLivré;    
}
response.send(" Livraison with Track ${Track} has been updated");
});

export default router;
