import { Component } from '@angular/core';

export class TodoItem {
  private _order:number;
  private task:string;
  private done:boolean;

  get order():number {
        return this._order;
    }
  set order(val:number) {
      this._order = val;
  }

  constructor(order, task, done) {
    this.order = order;
    this.task = task;
    this.done = done;
  }

}
