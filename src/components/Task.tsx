const Task = ({ task }: any) => {
    return (
        <div>
            <h3>
                {task.titulo}
            </h3>
            <p>{task.descripcion}</p>
        </div>
    )
}

export default Task;
