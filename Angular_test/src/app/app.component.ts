
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
