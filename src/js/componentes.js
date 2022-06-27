import { Todo } from "../../classes";
import { todoList } from "../index";

const divClassList  = document.querySelector('.todo-list')

const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro')

export const crearTodoHtml = (todo) => {

    const htmlTodo = ` 
        <li class= "${ (todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
                <label>${todo.tarea}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
        `
        const div = document.createElement('div');
        div.innerHTML = htmlTodo;
        
        divClassList.append(div.firstElementChild);

        return div.firstElementChild;

}   

txtInput.addEventListener('keyup', (event) => {
    //console.log(event);

    if(event.keyCode === 13 && txtInput.value.length > 0)
    {
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';

        
    }
});

divClassList.addEventListener('click', (event) => {

    console.log(event.target.localName); // Se detecta si es un label, button, input
    console.log(event.target.parentElement.parentElement);
    const nombreControl = event.target.localName;
    const controlPadre  = event.target.parentElement.parentElement;
    const padreAtributo = controlPadre.getAttribute('data-id');

    if(nombreControl.includes('input')){
        todoList.marcarCompletado(padreAtributo);
        controlPadre.classList.toggle('completed');
    }
    else if(nombreControl.includes('button'))
    {
        todoList.eliminarTodo(padreAtributo);
        divClassList.removeChild(controlPadre);
    }

    console.log(todoList);

});

btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletado();

    for(let i = divClassList.children.length - 1; i >= 0; i--)
    {
        const elemento = divClassList.children[i];

        if(elemento.classList.contains('completed'))
        {
            divClassList.removeChild(elemento);
        }
    }

});

ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;

    if(!filtro){ return ;}

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const elemento of divClassList.children)
    {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed')
        
        switch (filtro) {
            case 'Pendientes':
                    if(completado){
                        elemento.classList.add('hidden')
                    }
                
                break;
            case 'Completados':
                    if(!completado){
                        elemento.classList.add('hidden');
                    }
                break;
        }
    }
});