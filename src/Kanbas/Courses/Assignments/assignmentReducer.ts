import { createSlice } from "@reduxjs/toolkit";
import assignments from "../../Database/assignments.json";
import db from "../../Database";


const initialState = {
    // assignments: JSON.parse(localStorage.getItem('assignments')) || db.assignments,
    assignments: assignments,
    assignment: { 
        name: "New Assignment", 
        description: "New Assignment Description", 
        points: "100", 
        assign: "", 
        dueDate: "", 
        availableFromDate: "", 
        availableUntilDate: "" 
    },
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            console.log("Inside addAssignment reducer");
            const newId = new Date().getTime().toString();
            console.log("Generated _id:", newId);
            
            const newAssignment = {
                ...action.payload,
                _id: newId
            };

            state.assignments = [
                newAssignment,
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        selectAssignment: (state, action) => {
            state.assignment = {
                ...state.assignment,
                ...action.payload
            };
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, selectAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

