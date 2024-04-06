// todo.model.ts

export class Todo {
  id: number;
  title: string;
  completed: boolean;

  constructor(id: number, title: string, selected: boolean) {
    this.id = id;
    this.title = title;
    this.completed = selected;
  }
}
