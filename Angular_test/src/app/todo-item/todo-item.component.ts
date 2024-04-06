import { Component, Input } from '@angular/core';
import { TodoService } from '../todo/todo.service';
import { Todo } from '../todo/todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItem {
  @Input() todo!: Todo;
  newTodo: string = '';

  constructor(private todoService: TodoService) {}
  toggleTodoCompleted(todo: Todo): void {
    this.todoService.toggleTodoCompleted(todo.id);
  }

  removeTodo(todo: Todo): void {
    this.todoService.removeTodo(todo.id);
  }
}
