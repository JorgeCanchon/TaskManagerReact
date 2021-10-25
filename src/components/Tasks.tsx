import { message } from "antd";
import { Fragment, useEffect, useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { addTask } from "../redux/store/actionCreator";
import { ITask } from "../redux/types";
import { GetTasks } from "../services/taskRequest";
import { Loader } from "./loader";
import Task from "./Task";

export const Tasks = () => {

    const dispatch = useDispatch();
    const [loading, setloading] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const { tasks }: any = useSelector(
        (state: RootState) => ({
            tasks: state.tasks.tasks
        }),
        shallowEqual
    );

    const getData = async () => {
        setloading(true);
        let response: any = await GetTasks();
        switch (response.status) {
            case 200:
                let data: ITask[] = response.data.payload;
                data.forEach(task=> dispatch(addTask(task)));
                break;
            case 204:
                message.warning('No hay tareas disponibles');
                break;
            case 401:
                message.error('No autorizado');
                break;
            default:
                message.error('Ocurrio un error al consultar los datos');
                break;
        }
        setloading(false);
    }
    console.log(tasks);
    if (loading)
        <Loader />
    return tasks.length > 0 ? (
        <Fragment>
            {
                tasks.map((task: ITask) => (<Task task={task} />))
            }
        </Fragment>
    ) :
        (<Fragment>
            No hay datos para mostrar
        </Fragment>)
}

export default Tasks;