export class Todo {
  id: string;
  title: string;
  completed: boolean;

  constructor(id: string, title: string, selected: boolean) {
    this.id = id;
    this.title = title;
    this.completed = selected;
  }
}
