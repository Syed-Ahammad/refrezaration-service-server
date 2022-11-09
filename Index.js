const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();


const app = express();
const Port = process.env.PORT || 5000;

// middle-ware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.14mosb4.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
    try {
      const servicesCollection = client.db("refrigaration").collection("services");
    
      
    // api for get all services
      app.get('/services', async (req, res)=>{
          // Query for SERVICES that has 
        const query = {};
     
      const cursor =  servicesCollection.find(query);
      // since this method returns the matched document, not a cursor, print it directly
      const services = await cursor.limit(3).toArray()
      res.send(services);
    });
    
    } finally {
      
    }
  }
  run()
  .catch(err => console.error(err));

  app.get('/', (req, res)=>{
    res.send("Server Show in browser");
});



app.listen(Port, ()=>{
    console.log('Server is Runing on port ' + Port)
})