import { Component } from '@angular/core';
import { Todo } from './todo/todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoList } from './todo-list/todo-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoFormComponent, TodoList],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
