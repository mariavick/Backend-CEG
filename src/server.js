import express from "express";
import { userRoute } from "./routes/user.routes.js";

export const app = express();
const port = 7575;

app.use(express.json());
app.use(userRoute)

app.listen(port, async () => {
    console.log(`Servidor tá funcionando port ${port}`)
});