import { InstitutionModel } from "../models/Institutions.models.js";
import { InstitutionService } from "../services/institution.service.js";

const instanceServiceInstitution = new InstitutionService();
const createInstitution = async (req, res) => {
    const { institution_name, institution_description,  capacity_student, institution_price } = req.body;
    const newInstitution = await instanceServiceInstitution.createInstitutionService(institution_name, institution_description,  capacity_student, institution_price);
    return res
        .status(201)
        .json({
            message: "Instituição criada com sucesso!",
            newInstitution
        });
}

const getAllInstitutions = async (req, res) => {
    try {
        const institutions = await instanceServiceUser.getAllInstitutionService();
        return res.json({ institutions });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao recuperar os usuários" });
    }
}

const getInstitutionByName = async (req, res) => {
    const { institution_name } = req.body;
    const InstitutionFindName = await InstitutionModel.findOne({
        where: {
            institution_name
        }
    });
    return res.json({ InstitutionFindName });
}

export { createInstitution, getAllInstitutions, getInstitutionByName }