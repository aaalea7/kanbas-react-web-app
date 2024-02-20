import React from "react";
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { PiNotePencil } from "react-icons/pi";
import "./index.css";
import db from "../Database";

const CourseCard = ({
    course = {
        _id: "Unknown_id",
        name: "Unknown_name",
        number: "Unknown_number",
        startDate: "Unknown_startDate",
        endDate: "Unknown_endDate",
        image: "Unknown_image"
    }
}) => (
    <div className="col">
        <div className="card shadow-sm">
            {/* <div className="card-img-top wd-course-img-height-135px d-flex flex-row">
                <button type="button" className="btn position-absolute top-0 end-0 right-0 m-2 wd-course-card-img-button-white">
                    <FaEllipsisV />
                </button>
            </div> */}
            <div style={{ backgroundImage: `url(${course.image})`, 
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center' }} 
                        className="card-img-top wd-course-img-height-135px d-flex flex-row justify-content-end">
                <button type="button" className="btn position-absolute top-0 end-0 right-0 m-2 wd-course-card-img-button-white">
                    <FaEllipsisV />
                </button>
            </div>
            <div className="card-body d-flex flex-column">
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="mb-2 card-link wd-card-link-no-decoration">
                    <div className="wd-course-card-header-content-container">
                        <h6 className="card-title wd-ellipsis">{course.name}</h6>
                        <h5 className="card-subtitle mb-2 text-muted">{course.number}</h5>
                        <p className="card-text wd-ellipsis">{course.startDate} to {course.endDate}</p>
                    </div>
                </Link>
                <Link key={course.number} to={"/Kanbas/Dashboard"} className="wd-course-card-icon-grey">
                    <PiNotePencil />
                </Link>
            </div>
        </div>
    </div>
);

function Dashboard() {
    const courses = db.courses;
    return (
        <div className="mx-xs-1 mx-md-2 mx-lg-3 flex-grow-1">
            <h1>Dashboard</h1>
            <hr />
            <div className="ms-md-3">
                <h2>Published Courses ({courses.length})</h2>
                <hr />
                <div className="d-flex flex-row flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-start" id="wd-course-cards-container">
                    {courses.map((course) => <CourseCard course={course} />)}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;