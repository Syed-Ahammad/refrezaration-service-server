const express = require('express');
const cors = require('cors');


const app = express();
const Port = process.env.PORT || 5000;

// middle-ware
app.use(cors());
app.use(express.json());


app.get('/', (req, res)=>{
    res.send("Server Show in browser");
});


app.listen(Port, ()=>{
    console.log('Server is Runing on port ' + Port)
})