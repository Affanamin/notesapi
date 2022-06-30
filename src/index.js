const express = require("express")
const app = express()

const userRouter = require("./routes/userRoutes")
const noteRouter = require("./routes/noteRoutes")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter)
app.use("/note", noteRouter)


app.get("/", (req, res) => {
    res.send("Notes Api from Data Drive")
})

//const PORT = process.env.PORT || 5000;
//const PORT = process.env.PORT || 8080;
//var server_port = process.env.YOUR_PORT || process.env.PORT || 80;

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // app.listen(server_port, () => {
        //     console.log("Server Started at port " + PORT);
        // })
        app.listen(server_port, server_host, function () {
            console.log('Listening on port %d', server_port);
        });
    })
    .catch((error) => {
        console.log(error)
    })

