import { CourseModel } from "../models/Course.models.js";
import { CourseService } from "../services/course.service.js";
import { SUCCESS, ERRORS } from "../utils/response.js";

const instanceServiceCourse = new CourseService();

const createCourse = async (req, res) => {
    const { course_name, course_description, course_duration,  course_price } = req.body;
    const newCourse = await instanceServiceCourse.createCourseService(course_name, course_description, course_duration,  course_price);
    return res
        .status(201)
        .json({
            message: "Curso criado com sucesso!",
            newCourse
        });
}

const getAllCourses = async (req, res) => {
    try {
        const courses = await instanceServiceCourse.getAllCourseService();
        return res.json({ courses });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao recuperar os cursos" });
    }
}

const getCourseByName = async (req, res) => {
    const { course_name } = req.body;
    const CourseFindName = await CourseModel.findOne({
        where: {
            course_name
        }
    });
    return res.json({ CourseFindName });
}

const updateCourseDescription= async (req, res) => {
    const { id } = req.params;
    const { newCourseDescription } = req.body;

    const courseAlreadyExist = await CourseModel.findOne({
        where: {
            id: id
        }
    });

    if (!courseAlreadyExist) {
        return res.json({ message: `Curso ${ERRORS.NOT_FOUND}` });
    }

    await CourseModel.update({ course_description: newCourseDescription }, {
        where: {
            id
        }
    });
    const messageUpdate = await CourseModel.findByPk(id)
    return res.json({ message: "Descrição do curso atualizada com sucesso!" });
}

const deleteCourse = async (req, res) => {
    const { id } = req.params;
    await CourseModel.destroy({
        where: {
            id
        }
    });
    return res.json({
        message: `Curso ${SUCCESS.DELETED}`
    });
}

export { createCourse, getAllCourses, getCourseByName, updateCourseDescription, deleteCourse }