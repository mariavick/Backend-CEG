// import { getAllInstitution } from "../controllers/User.controller.js";
import { InstitutionModel } from "../models/Institutions.models.js"

export class InstitutionService {
    async createInstitutionService(  institution_name, institution_description,  capacity_student, institution_price ) {
        try {
            await InstitutionModel.sync();
            const institutonAlreadyExist = await InstitutionModel.findOne({
                where: {
                    institution_name
                }
            });

            if (institutonAlreadyExist) {
                return `Instituição já existe`;
            }

            const newInstitution = await InstitutionrModel.create({
                institution_name, institution_description,  capacity_student, institution_price
            });
            return newInstitution;
        } catch (error) {
                return error;
        }
    }
    async getAllInstitutionService(){
            return await InstitutionModel.findAll();
    }
}