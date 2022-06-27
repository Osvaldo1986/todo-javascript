export class Todo{

    static fromJson({id, tarea, completado, creado}){

        const newTodo = new Todo(tarea);

        newTodo.id         = id;
        newTodo.creado     = creado;
        newTodo.completado = completado;
    }
    constructor(tarea)
    {
        this.tarea      = tarea;

        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date();
    }
}