import { Component, OnInit } from '@angular/core';
import { TodoListService } from "../todo-list.service";

@Component({
  selector: "todo-list-manager",
  template: `
  <div class="todo-app">
    <h1>{{ title }}</h1>
    <todo-input class="todo-input" (submit)="addItem($event)"></todo-input>
    <ul>
      <li class="todo-item" *ngFor="let item of todoList">
        <todo-item (remove)="removeItem($event)" [todoItem]="item"></todo-item>
      </li>
    </ul>
  </div>`,
  styleUrls: ["./list-manager.component.css"]
})

export class ListManagerComponent implements OnInit {
  constructor(private todoListService: TodoListService) {}
  todoList;
  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  title = "My TODO list";

  addItem(title: string) {
    this.todoList = this.todoListService.addItem({ title: title });
  }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }
}
