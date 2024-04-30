import express from "express";

export const app = express();
const port = 7575;

app.use(express.json());

app.listen(port, async () => {
    console.log(`Servidor tá funcionando port ${port}`)
});