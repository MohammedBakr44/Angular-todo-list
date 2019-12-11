import { Component } from '@angular/core'
import { Model, TodoItem } from './model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model = new Model();

  getName(): string {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItem: string) {

    if(newItem != "") {
      this.model.items.push(new TodoItem(newItem, false));
    }

  }
   
}
