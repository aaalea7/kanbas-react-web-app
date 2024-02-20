import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import './index.css';
import '../../index.css'

function CourseTopNavigation() {

    const { courseId, assignmentId } = useParams();

    return (
        <nav aria-label="breadcrumb" className="d-flex align-items-center">
            <RxHamburgerMenu className="m-3 mb-0 wd-link-red" />
            <ol className="breadcrumb m-3 mb-0 ms-0">
                <li className="breadcrumb-item">
                    <Link key={courseId} className='wd-link-red' to={''}>
                        {courseId}
                    </Link>
                </li>
                {extractCourseNavTabFromUrl()}
            </ol>
        </nav>
    )
}

function extractCourseNavTabFromUrl() {
    const url = window.location.hash;
    const urlSegments = url.split("/");
    const coursesIndex = urlSegments.findIndex((segment) => segment === "Courses");

    if (coursesIndex != 1) {
        if (coursesIndex + 3 < urlSegments.length) {
            const tabName = urlSegments[coursesIndex + 2];
            const specificItem = urlSegments[coursesIndex + 3];
            return (
                <>
                    <li className="breadcrumb-item">
                        <Link key={tabName} className='wd-link-red' to={''}>
                            {tabName}
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {specificItem}
                    </li>
                </>
            )
        }
        else if (coursesIndex + 2 < urlSegments.length) {
            const tabName = urlSegments[coursesIndex + 2];
            return (
                <li className="breadcrumb-item active" aria-current="page">
                    {tabName}
                </li>
            )
        }
    }
}


export default CourseTopNavigation;