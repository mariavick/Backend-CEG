import express from "express";
import { userRoute } from "./routes/user.routes.js";
import { institutionRoute } from "./routes/Institutions.routes.js";
import { courseRoute } from "./routes/course.routes.js";
import { newsRoute } from "./routes/news.routes.js";

export const app = express();
const port = 7575;

app.use(express.json());
app.use(userRoute)
app.use(institutionRoute)
app.use(courseRoute)
app.use(newsRoute)

app.listen(port, async () => {
    console.log(`Servidor tá funcionando na porta ${port}`)
});