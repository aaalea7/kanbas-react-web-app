import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { PiNotePencil } from "react-icons/pi";
import "./index.css";
import db from "../Database";

function Dashboard({
    courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; 
}) {
    return (
        <div className="mx-xs-1 mx-md-2 mx-lg-3">
            <h1>Dashboard</h1>
            <hr />
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value }) } />
            <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <button onClick={addNewCourse} 
            style={{ marginTop: '5px',
                backgroundColor: 'grey', color: 'black', borderRadius: '5px', borderWidth: '0px'
            }}> Add
            </button>
            <button onClick={updateCourse}
            style={{ marginTop: '5px', marginLeft: '5px',
                backgroundColor: 'grey', color: 'black', borderRadius: '5px', borderWidth: '0px'
            }} > Update
            </button>
            <hr />
            <div className="ms-md-3">
                <h2>Published Courses ({courses.length})</h2>
                <hr />
                <div className="d-flex flex-row flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-start" id="wd-course-cards-container">
                    {courses.map((course) => (
                        <div className="col">
                            <div className="card shadow-sm">
                                <div style={{ backgroundImage: `url(${course.image})`, 
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat', 
                                            backgroundPosition: 'center' }} 
                                            className="card-img-top wd-course-img-height-125px d-flex flex-row justify-content-end">
                                    <button type="button" className="btn position-absolute top-0 end-0 right-0 m-2 wd-course-card-img-button-white">
                                        <FaEllipsisV />
                                    </button>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="mb-2 card-link wd-card-link-no-decoration">
                                        <div className="wd-course-card-header-content-container">
                                            <h6 className="card-title wd-ellipsis" >{course.name}
                                            <br />
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}
                                            style={{ 
                                                backgroundColor: 'lightgrey', color: 'grey', borderRadius: '5px', borderWidth: '0px'
                                            }}> Edit
                                            </button>
                                            <button onClick={(event) => {
                                                event.preventDefault(); 
                                                deleteCourse(course._id);
                                            }}
                                            style={{ marginLeft: '5px',
                                                backgroundColor: 'lightgrey', color: 'grey', borderRadius: '5px', borderWidth: '0px'
                                            }}> Delete
                                            </button>
                                            </h6>
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
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;