import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @HostListener('window:resize', [])
  public onResize() {
    this.isPhoneSize = window.innerWidth < 575;
    this.isBurgerOpen = !this.isPhoneSize ? false : this.isBurgerOpen;
  }

  isBurgerOpen: boolean = false;
  isPhoneSize: boolean = window.innerWidth < 575;

  PAGES = [
    { name: 'Home' },
    { name: 'Info' },
    { name: 'Cart' },
    { name: 'Contact' },
  ];

  constructor() {
  }

  toggleMenu() {
    this.isBurgerOpen = !this.isBurgerOpen;
  }

}
