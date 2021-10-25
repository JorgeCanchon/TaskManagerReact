import * as actionTypes from './actionTypes';
import { TaskAction, TaskState } from '../types';

const initialState: TaskState = {
    tasks: []
}

export const taskReducer = (
    state: TaskState = initialState,
    action: TaskAction
    ): TaskState => {
        switch(action.type){
            case actionTypes.ADD_TASK:
                return {
                    ...state,
                    tasks: [
                        ...state.tasks,
                        action.task
                    ]
                }
            case actionTypes.DELETE_TASK:
                return {
                    ...state,
                    tasks: state.tasks.filter(x => x.id !== action.task.id)
                }
            case actionTypes.UPDATE_TASK:
                return {
                    ...state,
                    tasks: state.tasks.map(x => (
                        x.id === action.task.id ? {
                        ...action.task,
                        }
                        : x
                    ))
                }  
            case actionTypes.GET_TASKS:
                return { tasks: state.tasks };
        }
        return state;
}

export default taskReducer;