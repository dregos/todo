import { Component } from '@angular/core';

export class TodoItem {
  private order:number;
  private task:string;
  private done:boolean;

  constructor(order, task, done) {
    this.order = order;
    this.task = task;
    this.done = done;
  }

}
