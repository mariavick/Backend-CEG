import { Router } from "express";
import { 
    createCourse, 
    getAllCourses, 
    getCourseByName, 
    updateCourseDescription, 
    deleteCourse
} from "../controllers/Course.controller.js";

const courseRoute = Router();

courseRoute.post("/new-course", createCourse);

courseRoute.get("/courses", getAllCourses);

courseRoute.get("/course-find-name", getCourseByName);

courseRoute.patch("/update-course-description/:id", updateCourseDescription);

courseRoute.delete("/delete-course/:id", deleteCourse);

export { courseRoute }