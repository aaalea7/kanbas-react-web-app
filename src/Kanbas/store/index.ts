import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentReducer from "../Courses/Assignments/assignmentReducer";

export interface KanbasState {
    modulesReducer: {
        modules: any[];
        module: any;
    };
    assignmentReducer: {
        assignments: any[];
        assignment: any;
    }
}
const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentReducer,
    }
});

export default store;