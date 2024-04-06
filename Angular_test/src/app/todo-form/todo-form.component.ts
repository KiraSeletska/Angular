import { Component } from '@angular/core';
import { TodoService } from '../todo/todo.service';
import { Todo } from '../todo/todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  newTodo: string = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (this.newTodo.trim() === '') {
      return;
    }
    const newId = uuidv4();
    const newTodoItem: Todo = {
      id: newId,
      title: this.newTodo,
      completed: false,
    };
    this.todoService.addTodo(newTodoItem);
    this.newTodo = '';
  }
}
