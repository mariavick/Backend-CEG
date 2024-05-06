import { NewsModel } from "../models/News.models.js";
import { NewsService } from "../services/news.service.js";
import { SUCCESS, ERRORS } from "../utils/response.js";

const instanceServiceNews = new NewsService();

const createNews = async (req, res) => {
    const { title_news, news_description, image_news, news_author, news_date } = req.body;
    const newNews = await instanceServiceNews.createNewsService(title_news, news_description, image_news, news_author, news_date);
    return res
        .status(201)
        .json({
            message: "Usuário criado com sucesso!",
            newNews
        });
}

const getAllNews = async (req, res) => {
    try {
        const news = await instanceServiceNews.getAllNewsService();
        return res.json({ news });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao recuperar os usuários" });
    }
}

const getNewsByName = async (req, res) => {
    const { title_news } = req.body;
    const NewsFindName = await NewsModel.findOne({
        where: {
            title_news
        }
    });
    return res.json({ NewsFindName });
}

const updateNewsDescription = async (req, res) => {
    const { id } = req.params;
    const { newNews_description } = req.body;

    const newsAlreadyExist = await NewsModel.findOne({
        where: {
            id: id
        }
    });

    if (!newsAlreadyExist) {
        return res.json({ message: `Noticia ${ERRORS.NOT_FOUND}` });
    }

    await NewsModel.update({ news_description: newNews_description }, {
        where: {
            id
        }
    });
    const messageUpdate = await NewsModel.findByPk(id)
    return res.json({ message: "Descrição atualizada com sucesso!" });
}

const deleteNews = async (req, res) => {
    const { id } = req.params;
    await NewsModel.destroy({
        where: {
            id
        }
    });
    return res.json({
        message: `Noticia ${SUCCESS.DELETED}`
    });
}

export { createNews, getAllNews, getNewsByName, updateNewsDescription, deleteNews }