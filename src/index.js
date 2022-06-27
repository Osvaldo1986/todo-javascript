//import { Todo } from '../classes/todo.class';
import {Todo, TodoList} from '../classes/index.js';
import { crearTodoHtml } from './js/componentes.js';
import './styles.css';


//const tarea = new Todo('Aprender Javascript');

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));

/// Nota esto es lo mismo debido a que la variable es la misma que igual se pasa como argumento
  //todoList.todos.forEach(crearTodoHtml);
//

//todoList.nuevoTodo(tarea);

//tarea.completado = true;
//crearTodoHtml(tarea);

console.log(todoList);





