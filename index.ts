import express, {Application, Response, Request} from "express";
import router from "./Router/bookRouter";

const PORT: string | number = process.env.port || 2060;

const app: Application = express();

app.use(express.json());
require("./Config/db")

app.get("/", (req: Request, res: Response): Response =>{
    return res.status(200).json({
        message: "Server is successfully created"
    })
});

app.use("/api", router)

app.listen(PORT, () =>{
    console.log("Listening to my port")
});
