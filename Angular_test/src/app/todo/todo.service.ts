import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  todosUpdated: Subject<void> = new Subject<void>();
  constructor() {
    // При инициализации сервиса загружаем данные из локального хранилища, какаячто дичь с LS, разобраться
    this.loadTodosFromLocalStorage();
  }

  updateLocalStorage() {
    window.localStorage.setItem('todos', JSON.stringify(this.todos));
    this.todosUpdated.next();
  }
  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.updateLocalStorage();
  }

  removeTodo(todoId: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    this.updateLocalStorage();
  }

  toggleTodoCompleted(todoId: string): void {
    const todo = this.todos.find((todo) => todo.id === todoId);
    if (todo) {
      todo.completed = !todo.completed;
    }
    this.updateLocalStorage();
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  private loadTodosFromLocalStorage(): void {
    if (typeof window !== 'undefined') {
      const storedTodos = window.localStorage.getItem('todos');
      this.todos = storedTodos ? JSON.parse(storedTodos) : [];

    }
  }
}
