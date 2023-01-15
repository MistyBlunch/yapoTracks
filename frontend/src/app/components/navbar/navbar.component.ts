import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  navItems: any[] = [];

  constructor() {
    this.navItems = [
      {
        title: 'Buscar Canciones',
        path: '',
      },
      {
        title: 'Canciones favoritas',
        path: '/favorite-tracks',
      },
    ];
  }
}
