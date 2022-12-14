const mongoose = require("mongoose");

const URI = "mongodb://localhost/BookStore";

const LiveURI: string = "mongodb+srv://sylviaDB:atlaspassword@cluster0.fhx2vt1.mongodb.net/bookstoretest"

mongoose.connect(LiveURI)

mongoose.connection.on(
    "open", () =>{
        console.log("Database is connected to server")
    }
).once(
    "error", (error) =>{
        console.log("An error occured in connecting DB")
    }
)