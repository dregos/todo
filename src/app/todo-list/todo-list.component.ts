import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent  {
  private todoList: TodoItem[];


  constructor() {
    this.todoList = [
      new TodoItem(1,'Task 1', false),
      new TodoItem(2,'Task 2', true),
      new TodoItem(3,'Task 3', false)
    ];
  }

  remove(todoItem){
    const index = this.todoList.indexOf(todoItem);
    this.todoList.splice(index, 1);
  }
  markDone(todoItem){
    todoItem.done = true;
  }

  moveUp(todoItem){
    const index = this.todoList.indexOf(todoItem);
    let previousItem:TodoItem = this.todoList[index-1];
    this.todoList.splice(index, 1);
    let pOrder:number = previousItem.order;
    previousItem.order = todoItem.order;
    todoItem.order = pOrder;
    this.todoList.splice(index-1,0,todoItem);
  }

  moveDown(todoItem){
    const index = this.todoList.indexOf(todoItem);
    let nextItem:TodoItem = this.todoList[index+1];
    this.todoList.splice(index, 1);
    
    let nOrder:number = nextItem.order;
    nextItem.order = todoItem.order;
    todoItem.order = nOrder;
    this.todoList.splice(index+1,0,todoItem);
  }

}
