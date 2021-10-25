import * as actionTypes from './actionTypes';
import { TaskAction, ITask } from '../types';

export const addTask = (task: ITask) => {
    const action: TaskAction = {
        type: actionTypes.ADD_TASK,
        task
    }
    return action;
};

export const updateTask = (task: ITask) => {
    const action: TaskAction = {
        type: actionTypes.UPDATE_TASK,
        task
    }
    return action;
};

export const deleteTask =  (task: ITask) => {
    const action: TaskAction = {
        type: actionTypes.DELETE_TASK,
        task
    }
    return action;
};