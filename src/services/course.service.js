import { CourseModel } from "../models/Course.models.js"

export class CourseService {
    async createCourseService( course_name, course_description, course_duration,  course_price ) {
        try {
            await CourseModel.sync();
            const courseAlreadyExist = await Course.findOne({
                where: {
                    course_name
                }
            });

            if (courseAlreadyExist) {
                return `Curso já existe`;
            }

            const newCourse = await CourseModel.create({
                course_name, course_description, course_duration,  course_price
            });
            return newCourse;
        } catch (error) {
            return error;
        }
    }
    async getAllCourseService() {
        return await CourseModel.findAll();
    }
}