import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaBars, FaCheck, FaPlus, FaEllipsisV } from "react-icons/fa";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) => 
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) => 
        state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <div className="modules-container">
        <div className="module-header">
            <button className="btn btn-outline-secondary">Collapse All</button>
            <button className="btn btn-outline-secondary">View Progress</button>
            <button className="btn btn-outline-success"><FaCheck className="module-check-icon" />Publish All</button>
            <button className="btn btn-danger">+ Module</button>
            <FaEllipsisV className="module-menu-icon" />
        </div>
        <hr />
        <ul className="list-group">
            <li className="list-group-item list-group-flex-item ">
                <div className="modules-inputs">
                    <input
                        value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                        }/>
                    <textarea
                        value={module.description}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))
                        }/>
                </div>
                <button onClick={() => dispatch(updateModule(module))}
                    className="btn btn-primary button-left">
                    Update
                </button>
                <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                    className="btn btn-success button-left">
                    Add
                </button>
                <div className="spacer"></div>
            </li>
            {moduleList
            .filter((module) => module.course === courseId)
            .map((module, index) => (
                <li key={index} className="module-item">
                <div className="module-content">
                    <FaBars className="module-icon" />
                    <div className="module-content-start">
                        <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
                            <span>{module.name}</span>
                            {/* <br /> */}
                            <div style={{ marginTop: '0px' }}></div>
                            <span className="module-content-subtitle" style={{ display: 'block' }}>{module.description}</span>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    <button onClick={() => dispatch(setModule(module))} className="btn btn-success">
                        Edit
                    </button>
                    <button onClick={() => dispatch(deleteModule(module._id))} className="btn btn-danger">
                        Delete
                    </button>
                    <div className="module-actions">
                        <FaCheck className="module-check-icon" />
                        <FaPlus />
                        <FaEllipsisV />
                    </div>
                </div>
                </li>
            ))}
        </ul>
        </div>
    );
}

export default ModuleList;