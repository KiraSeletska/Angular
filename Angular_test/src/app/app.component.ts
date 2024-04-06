
/*import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-first-angular-app';
}*/

/*
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})



export class AppComponent {
  title = 'todo-app';

  
  ngOnInit() {
    if (typeof window !== 'undefined') {
      const storedTodos = window.localStorage.getItem('todos');
      this.todos = storedTodos ? JSON.parse(storedTodos) : [];
    }
  }
  newTodo: string = '';
  todos = [{
    id: 123,
    title: 'Test1',
    completed: false,


  }]
  addTodo(){
    this.todos.push({id: 1, title: this.newTodo, completed: false});
    this.newTodo = '';
    window.localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  markDone(todo: Todo){
    todo.completed = true;
    window.localStorage.setItem('todos', JSON.stringify(this.todos));

  }

  removeTodo(todoToRemove: Todo){
  this.todos = this.todos.filter((todo: Todo) => todo !== todoToRemove);
  window.localStorage.setItem('todos', JSON.stringify(this.todos));

  }
}
*/
/*
old html
<input [(ngModel)]="newTodo"/>
<button (click) ="addTodo()">Add todo</button>

<div *ngFor="let todo of todos"[class.done]="todo.completed">
  {{todo.title}}
  <button (click)="markDone(todo)">Done</button>
  <button (click)="removeTodo(todo)">X</button>
</div>
*/

import { Component } from '@angular/core';
import { Todo } from './todo/todo.model'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  newTodo: string = '';
  todos: Todo[] = []; // Используем массив типа Todo

  // Метод для добавления новой задачи
  addTodo() {
    if (this.newTodo.trim() === '') {
      return; // Проверяем, чтобы новая задача не была пустой
    }
    const newTodoItem: Todo = { // Создаем новый объект Todo
      id: this.todos.length + 1, // Идентификатор - длина массива + 1
      title: this.newTodo,
      completed: false
    };
    this.todos.push(newTodoItem); // Добавляем новую задачу в массив
    this.newTodo = ''; // Сбрасываем значение новой задачи
    this.updateLocalStorage(); // Обновляем данные в localStorage
  }

  // Метод для отметки задачи как выполненной
  toggleTodoCompleted(todo: Todo): void {
    todo.completed = !todo.completed; // Инвертируем значение свойства completed
    this.updateLocalStorage(); // Обновляем данные в localStorage
  }
  

  // Метод для удаления задачи
  removeTodo(todoToRemove: Todo) {
    this.todos = this.todos.filter(todo => todo !== todoToRemove);
    this.updateLocalStorage(); // Обновляем данные в localStorage
  }

  // Метод для сохранения данных в localStorage
  updateLocalStorage() {
    window.localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // Метод для загрузки данных из localStorage при инициализации компонента
  ngOnInit() {
    if (typeof window !== 'undefined') {
      const storedTodos = window.localStorage.getItem('todos');
      this.todos = storedTodos ? JSON.parse(storedTodos) : [];
    }
  }
}
