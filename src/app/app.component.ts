import { Component } from '@angular/core';
import {TodoService} from './todo/todo.service';
import {provideRouter, RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';
import { badIdeasRoutes } from './badIdeasComponent/badIdeas.routes';
import { todoRoutes } from './todo/todo.routes';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular 2 Playground</h1>
  <nav>
    <a [routerLink]="['/todoList']">Todo List</a>
    <a [routerLink]="['/badIdeas']">Bad Ideas</a>
  </nav>
    <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers : [
    TodoService
  ]
})
export class AppComponent {

  author : string;

  constructor(){
    this.author = "David Mifsud";
  }

}

export const routes: RouterConfig = [
  ...badIdeasRoutes,
  ...todoRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
