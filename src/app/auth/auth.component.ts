import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <ng-container>
      <router-outlet></router-outlet>
    </ng-container>
  `,
  styles: [
  ]
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
