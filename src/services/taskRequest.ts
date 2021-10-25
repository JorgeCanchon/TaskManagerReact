import axios from 'axios';
import { ITask } from '../redux/types';
import * as constants from '../utils/constants';

const token = localStorage.getItem('token');
axios.defaults.headers.common = {'Authorization': `bearer ${token}`};

export const GetTasks = async () => {
  try {
    let result = await axios.get(constants.TASK.GET_TASKS);
    let data = await result;
    return data;
  } catch (e) {
    console.log(e);
    return { status: 500 };
  }
}

export const DeleteTask = async (id: number) => {
  try {
    let result = await axios.delete(`${constants.TASK.DELETE}/${id}`);
    let data = await result;
    return data;
  } catch (e) {
    console.log(e);
    return { status: 500 };
  }
}

export const AddTask = async (task: ITask) => {
  try {
    console.log(task);
    let result = await axios.post(constants.TASK.POST, task);
    let data = await result;
    return data;
  } catch (e) {
    console.log(e);
    return { status: 500 };
  }
}

export const UpdateTask = async (task: ITask) => {
  try {
    let result = await axios.put(constants.TASK.PUT, task);
    let data = await result;
    return data;
  } catch (e) {
    console.log(e);
    return { status: 500 };
  }
}