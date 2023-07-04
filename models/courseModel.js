const mongoose = require('mongoose')

const courseSchema = mongoose.Schema(
    {
        uid : {
            type: String            
        },
        name: {
            type: String,
            required: [true, "Please enter a course name"]
        },
        author: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            default: "https://youthincmag.com/wp-content/uploads/2019/03/NILIS-University-of-Colombo.jpg",
            required: false,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        }
    }
)


const Courses = mongoose.model('Courses', courseSchema);

module.exports = Courses;