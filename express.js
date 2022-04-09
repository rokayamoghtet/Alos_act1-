import express from "express";
import serverRouter from "./server.js";

const app = express();

app.use(express.json());

app.use("./server", serverRouter); 

const PORT = 3000;

app.listen(PORT,() => {
  console.log('The server is running of PORT ${PoRT}')
});
