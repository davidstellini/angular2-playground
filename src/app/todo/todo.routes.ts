import { RouterConfig }          from '@angular/router';
import { TodoComponent }     from './todo.component';

export const todoRoutes: RouterConfig = [
  { path: '', redirectTo: '/todoList', terminal: true},
  { path: 'todoList',  component: TodoComponent },
];
