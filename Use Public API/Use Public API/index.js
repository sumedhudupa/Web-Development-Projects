import express from "express";
import axios from "axios";
const app = express();
const port = 3000;
app.use(express.static('public'));
app.get("/",async (req,res)=>{
    try{
        const response = await axios.get(" https://zenquotes.io/api/random/");
        res.render("index.ejs",{secret : response.data[0].q, user: response.data[0].a});
        console.log(response.data[0].q);
        console.log(response.data[0].a);
    }
    catch(error){
        console.log(error.response.data);
    }
})
app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`);
})