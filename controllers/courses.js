const courses = require('../data/courses.js')

const getAllCourses = (req, res) => {
    res.json(courses)
}

const getCourse = (req, res) => {
    const course = courses.find(course => course.course_id == req.params.id)
    if(!course) res.send(`No course with id ${req.params.id} exists`)
    res.json(course)
}

module.exports = {
    getAllCourses,
    getCourse
}