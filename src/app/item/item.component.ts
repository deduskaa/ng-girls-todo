import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: "todo-item",
  template: `
  <div class="todo-item">
    <input class="todo-checkbox" type="checkbox" (click)="completeItem()"/>
    <p class="todo-title" [ngClass]="{'todo-complete': isComplete}">
      {{ todoItem.title }}
      </p>
    <button class="btn btn-red" (click)="removeItem()">
      remove
    </button>
  </div>
  `,
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Input() todoItem: any;

  isComplete: boolean = false;

  completeItem() {
    this.isComplete = !this.isComplete;
  }

  constructor() {}

  ngOnInit() {}

  removeItem() {
    this.remove.emit(this.todoItem);
  }
}
