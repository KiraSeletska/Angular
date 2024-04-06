import { Component } from '@angular/core';
import { TodoService } from '../todo/todo.service'; 
import { Todo } from '../todo/todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../todo-item/todo-item.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItem],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoList {
todos: Todo[] = []
private todosSubscription: Subscription;

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos()

    this.todosSubscription = this.todoService.todosUpdated.subscribe(() => {
      this.todos = this.todoService.getTodos();
    });
  } 
}
