import { Todo } from "./todo.class";

export class TodoList{

    constructor(){
        this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(tarea){
        this.todos.push(tarea);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
      this.todo = this.todos.filter(todo => todo.id != id);
      this.guardarLocalStorage();
    }

    marcarCompletado(id){

        
        for(const todo of this.todos){
            console.log(id, todo.id);
            if (todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletado(){
        
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo')
                     ? JSON.parse(localStorage.getItem('todo'))
                     : []);

        this.todos.forEach(todo => Todo.fromJson(todo));
    }
}