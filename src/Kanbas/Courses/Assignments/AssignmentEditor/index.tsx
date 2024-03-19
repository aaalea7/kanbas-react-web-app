import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    addAssignment,
    updateAssignment,
} from "../assignmentReducer";
import db from "../../../Database";
import "./index.css";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { KanbasState } from "../../../store";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId
    );

    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const currentAssignment = useSelector((state: KanbasState) =>
        state.assignmentReducer.assignments.find((a) => a._id === assignmentId)
    );
    const [localAssignment, setLocalAssignment] = useState(
        currentAssignment || {
            _id: "",
            title: "",
            description: "",
            points: "",
            course: courseId || ""
        } as any
    );
    useEffect(() => {
        if (assignmentId && assignmentId !== "AssignmentEditor" && currentAssignment) {
        setLocalAssignment(currentAssignment);
        }
    }, [assignmentId, currentAssignment]);
    
    const handleSave = () => {
        const newAssignment = { ...localAssignment, course: courseId };
        console.log("New Assignment:", newAssignment);
        if (assignmentId && assignmentId !== "AssignmentEditor") {
            dispatch(updateAssignment(localAssignment));
        } else {
            const newAssignment = {
                ...localAssignment,
                course: courseId,
            };
            delete newAssignment._id;

            console.log("Dispatching addAssignment with:", newAssignment);
            dispatch(addAssignment(newAssignment));
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    const handleChange = (field: string, value: string) => {
        setLocalAssignment((prev: any) => ({...prev, [field]: value }));
    };
    
    
    
    return (
        <div className="assignment-container">
            <div className="assignment-header">
                <FaCheckCircle className="check-icon" />
                <span className="publish-text">Published</span>
                <FaEllipsisV className="ellip-icon" />
            </div>
            <hr />
            <div className="assignment-name">
                <h3>Assignment Name</h3>
                <input 
                    value={localAssignment.title || ""}
                    onChange={(e) => handleChange("title", e.target.value)}
                    placeholder="New Assignment"
                    className="form-control mb-2"/>
            </div>
            <div className="assignment-description">
                {/* <h3>Assignment Description</h3> */}
                <textarea
                    value={localAssignment.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="New Assignment Description"
                    className="form-control mb-2">
                </textarea>
            </div>
            <div className="assignment-points">
                <h4>Points</h4>
                <input
                    type="number"
                    value={localAssignment.points}
                    onChange={(e) => handleChange("points", e.target.value)}
                    className="form-control mb-2"/>
            </div>
            <div className="assignment-dates-container">
                <h4>Assign</h4>
                <div className="assignment-dates-container-1">
                    <div className="assignment-dates-group">
                    <label htmlFor="dueDate" className="form-label">Due</label>
                    <input
                        id="dueDate"
                        type="date"
                        value={localAssignment.dueDate || ""}
                        onChange={(e) => handleChange("dueDate", e.target.value)}
                        className="form-control mb-2"/>
                    </div>
                    <div className="assignment-dates-container">
                        <div className="assignment-dates-group">
                            <label htmlFor="availableFromDate" className="form-label">Available from</label>
                            <input
                                id="availableFromDate"
                                type="date"
                                value={localAssignment.availableFromDate || ""}
                                onChange={(e) => handleChange("availableFromDate", e.target.value)}
                                className="form-control mb-2"/>
                        </div>
                        <div className="assignment-dates-group">
                            <label htmlFor="availableUntilDate" className="form-label">Until</label>
                            <input
                                id="availableUntilDate"
                                type="date"
                                value={localAssignment.availableUntilDate || ""}
                                onChange={(e) => handleChange("availableUntilDate", e.target.value)}
                                className="form-control mb-2"/>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <hr />
            <div className="button-container float-end">
                <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-danger">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-success me-2">
                    Save
                </button>
            </div>
        </div>
    );
}

export default AssignmentEditor;