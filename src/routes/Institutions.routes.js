import { Router } from "express";
import { 
    createInstitution,
    getAllInstitutions,
    getInstitutionByName,
    updateInstitutionDescription,
    deleteInstitution
} from "../controllers/Institution.controller.js";

const  institutionRoute = Router();

institutionRoute.post("/new-institution", createInstitution);

institutionRoute.get("/institutions", getAllInstitutions);

institutionRoute.get("/institution-find-name", getInstitutionByName);

institutionRoute.patch("/update-description/:id", updateInstitutionDescription);

institutionRoute.delete("/delete-institution/:id", deleteInstitution)

export { institutionRoute }