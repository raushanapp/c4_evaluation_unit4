const app = require("./index");

const connect = require("./config/db")

app.listen(6000,async() =>{
    try{
        await connect();
        console.log("Listening on port 6000....")

    }catch(err){
        return console.Errors({message: err.message})
    }
})