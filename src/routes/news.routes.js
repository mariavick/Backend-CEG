import { Router } from "express";
import { 
    createNews,
    getAllNews,
    getNewsByName,
    updateNewsDescription,
    deleteNews
} from "../controllers/News.controller.js";

const newsRoute = Router();

newsRoute.post("/new-news", createNews);

newsRoute.get("/news", getAllNews);

newsRoute.get("/news-find-name", getNewsByName);

newsRoute.patch("/update-news-description/:id", updateNewsDescription );

newsRoute.delete("/delete-news/:id", deleteNews);

export { newsRoute }