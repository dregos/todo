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
      new TodoItem(2,'Task 2', false),
      new TodoItem(3,'Task 3', false)
    ];
  }

  remove(todoItem){
    const index = this.todoList.indexOf(todoItem);
    this.todoList.splice(index, 1);
  }

  moveUp(todoItem){

  }

  moveDown(todoItem){

  }

}
