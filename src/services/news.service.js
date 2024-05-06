import { NewsModel } from "../models/News.models.js"

export class NewsService {
    async createNewsService(title_news, news_description, image_news, news_author, news_date) {
        try {
            await NewsModel.sync();
            const newsAlreadyExist = await NewsModel.findOne({
                where: {
                    title_news
                }
            });

            if (newsAlreadyExist) {
                return `Noticia já existe`;
            }

            const newNews = await NewsModel.create({
                title_news, news_description, image_news, news_author, news_date
            });
            return newNews;
        } catch (error) {
            return error;
        }
    }
    async getAllNewsService() {
        return await NewsModel.findAll();
    }
}