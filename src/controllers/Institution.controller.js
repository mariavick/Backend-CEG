import { InstitutionModel } from "../models/Institutions.models.js";
import { InstitutionService } from "../services/institution.service.js";
import { SUCCESS, ERRORS } from "../utils/response.js";

const instanceServiceInstitution = new InstitutionService();
const createInstitution = async (req, res) => {
    const { institution_name, institution_description, capacity_student, institution_price } = req.body;
    const newInstitution = await instanceServiceInstitution.createInstitutionService(institution_name, institution_description, capacity_student, institution_price);
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
        return res.status(500).json({ error: "Erro ao recuperar as instituições" });
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

const updateInstitutionDescription = async (req, res) => {
    const { id } = req.params;
    const { newInstitution_description } = req.body;

    const institutionAlreadyExist = await InstitutionModel.findOne({
        where: {
            id: id
        }
    });

    if (!institutionAlreadyExist) {
        return res.json({ message: `Instituição ${ERRORS.NOT_FOUND}` });
    }

    await InstitutionModel.update({ institution_description: newInstitution_description }, {
        where: {
            id
        }
    });
    const messageUpdate = await InstitutionModel.findByPk(id)
    return res.json({ message: "Descrição atualizada com sucesso!" });
}

const deleteInstitution = async (req, res) => {
    const { id } = req.params;
    await InstitutionModel.destroy({
        where: {
            id
        }
    });
    return res.json({
        message: `Instituição ${SUCCESS.DELETED}`
    });
}

export { createInstitution, getAllInstitutions, getInstitutionByName, updateInstitutionDescription, deleteInstitution }