import { Fragment, useEffect, useState } from 'react'
import Tasks from '../components/Tasks';

import { Layout } from 'antd';
import { GetToken } from '../services/authRequest';
import { IAuth, ITask } from '../redux/types';
import { addTask } from '../redux/store/actionCreator';
import AddTaskManager from '../components/AddTask';
import { AddTask } from '../services/taskRequest';
import { useDispatch } from 'react-redux';
const { Header, Footer, Sider, Content } = Layout;

export default function TaskContainer() {

    const dispatch = useDispatch();
    
    useEffect(() => {
        getData();
    }, []);
    
    const [token, setToken] = useState('');
    const getData = async () => {
        let authInfo : IAuth = {
            username: 'demo',
            password: '123456'
        };

        let response: any = await GetToken(authInfo);
        
        switch (response.status) {
            case 200:
                let data : string = response.data;
                localStorage.setItem('token', data);
                setToken(data);
                break;
            default:
                localStorage.removeItem('token');
                break;
        }
    }

    const onAddTask = async (titulo: string, descripcion: string, estado: number) => {
        let taskData : ITask = {
            titulo,
            descripcion,
            codigoEstado: estado,
            codigoUsuario: 1
        }
        let response: any = await AddTask(taskData);
        
        switch (response.status) {
            case 200:
                let data : any = response.data;
                dispatch(addTask({id: data.payload, ...taskData}));
                break;
            default:
                break;
        }
    }

    return (
        <Fragment>
            <Layout className="layout">
                <Header style={{ color: '#ffffff' }}>Task Manager</Header>
                <Content style={{ padding: '0 50px' }}>
                    <AddTaskManager onAdd={onAddTask} />
                    {token.length > 0 ? <Tasks /> : null}
                </Content>
                <Footer>Copyright&copy; {(new Date).getFullYear()} - Página creada por Jorge Canchón - Todos los derechos reservados </Footer>
            </Layout>
        </Fragment>
    )
}
