export interface ITask {
    id?: number,
    titulo: string,
    descripcion: string,
    codigoUsuario: number,
    codigoEstado: number
}

export interface IAuth {
    username: string,
    password: string
}

export type TaskState = {
    tasks: ITask[]
}

export type TaskAction = {
    type: string
    task: ITask
}

export type DispatchType = (args: TaskAction) => TaskAction

export const taskStatus = [{
    codigo: 1,
    valor:"Nueva"
},{
    codigo:2,
    valor:"En progreso"
},
{
    codigo:3,
    valor:"Terminada"
}]