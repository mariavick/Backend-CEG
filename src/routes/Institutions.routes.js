import { Router } from "express";
import { 
    createInstitution,
    getAllInstitutions,
    getInstitutionByName,
} from "../controllers/Institution.controller.js";

const  institutionRoute = Router();

institutionRoute.post("/new-institution", createInstitution);

institutionRoute.get("/institutions", getAllInstitutions);

institutionRoute.get("/institution-find-name", getInstitutionByName);

export { institutionRoute }