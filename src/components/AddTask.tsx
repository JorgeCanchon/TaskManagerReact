import { Select } from 'antd';
import { useState } from 'react';
import { taskStatus } from '../redux/types';

const { Option } = Select;

const AddTaskManager = ({ onAdd }: any) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [estado, setEstado] = useState(1);

    const onSubmit = (e: any) => {
        e.preventDefault();
        if(titulo.length <=0 || descripcion.length <=0){
            alert('Please add a task');
            return;
        }

        onAdd(titulo, descripcion, estado);
        
        setTitulo('');
        setDescripcion('');
        setEstado(1);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Titulo Tarea</label>
                <input
                    type='text'
                    placeholder='Titulo'
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Descripcion</label>
                <input
                    type='text'
                    placeholder='descripcion'
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Estado tarea</label>
                <Select defaultValue={1} className="select-before">
                    {taskStatus.map((status: any) => (<Option value={status.codigo}>{status.valor}</Option>))}
                </Select>
            </div>
            <input
                type='submit'
                value='Save Task'
                className='btn btn-block'
            />
        </form>
    );
}

export default AddTaskManager;