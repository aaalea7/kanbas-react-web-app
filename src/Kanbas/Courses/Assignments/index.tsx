import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaEllipsisV, FaCheckCircle, FaTrashAlt, FaPlus } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import "./index.css";
import assignments from "../../Database/assignments.json";
import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    selectAssignment,
} from "./assignmentReducer";
import { KanbasState } from "../../store";

function Assignments() {
    const { courseId } = useParams<{ courseId: string }>();
    const assignments = useSelector((state: KanbasState) => 
        state.assignmentReducer.assignments);
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );
    const assignment = useSelector((state: KanbasState) => 
        state.assignmentReducer.assignment);
    const dispatch = useDispatch();
    const handleDelete = (event: React.MouseEvent<any>, 
        assignmentId: string) => {
        event.preventDefault();
        event.stopPropagation();
        const confirmation = window.confirm(
            "Are you sure you want to remove this assignment?"
        );
        if (confirmation) {
            dispatch(deleteAssignment(assignmentId));
        }
    };
    const navigate = useNavigate();
    const handleEditClick = (assignmentId: string) => {
        navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignmentId}`);
    };
    const handleSelectAssignment = (assignmentId: string) => {
        const assignmentToSelect = assignments.find((a) => a._id === assignmentId);
        if (assignmentToSelect) {
            dispatch(selectAssignment(assignmentToSelect));
        } else {
            console.error("Assignment not found:", assignmentId);
        }
    };
    
    return (
        <div className="assignment-container">
        <div className="flex-container">
            <div className="search-container">
                <input className="form-control" placeholder="Search for Assignment" />
            </div>
            <div className="assignment-buttons-header">
                <button className="btn btn-outline-success">+ Group </button>
                <Link 
                    to={`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`}
                    className="btn btn-danger">
                        + Assignment
                </Link>
                <FaEllipsisV className="module-menu-icon" />
            </div>
        </div>
        <hr />
        <div className="list-group assignment-contents-container">
            <div className="assignment-header-container">
                <div className="start-icons flex-container">
                    <FaEllipsisV />
                    <h4 style={{paddingLeft: '5px', paddingTop: '5px'}}>Assignments for Course {courseId}</h4>
                </div>
                <div className="end-icons flex-container">
                    <div className="round-container">40% of Total</div>
                    {/* <span className="plus-icon">+</span> */}
                    <FaPlus />
                    <FaEllipsisV />
                </div>
                
            </div>
            {courseAssignments.map((assignment) => (
                <div className="custom-link list-group-item-assign">
                    <div className="start-icons">
                        <FaEllipsisV />
                        <FaRegPenToSquare
                            className="check-icon"
                            onClick={() => handleEditClick(assignment._id)} />
                        <span>{assignment.title}</span>
                    </div>

                    <div className="end-icons">
                        <FaCheckCircle 
                            className="check-icon"
                            onClick={() => handleSelectAssignment(assignment._id)} />
                        <FaTrashAlt
                            onClick={(event) => {
                                event.stopPropagation();
                                handleDelete(event, assignment._id);
                            }}
                            className="delete-icon"/>
                        <FaEllipsisV />
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Assignments;