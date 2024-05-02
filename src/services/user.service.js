// import { getAllUsers } from "../controllers/User.controller.js";
import { UserModel } from "../models/User.models.js"

export class UserService {
    async createUserService( name, email, password ) {
        try {
            await UserModel.sync();
            const userAlreadyExist = await UserModel.findOne({
                where: {
                    email
                }
            });

            if (userAlreadyExist) {
                return `Usuario já existe`;
            }

            const newUser = await UserModel.create({
                name, email, password
            });
            return newUser;
        } catch (error) {
                return error;
        }
    }
    async getAllUserService(){
            return await UserModel.findAll();
    }
}