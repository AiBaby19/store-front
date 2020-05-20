import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @HostListener('window:resize', [])
  public onResize() {
    this.isPhoneSize = window.innerWidth < 576;
    this.isBurgerOpen = !this.isPhoneSize ? false : this.isBurgerOpen;
  }

  isBurgerOpen: boolean = false;
  isPhoneSize: boolean = window.innerWidth < 576;

  PAGES = [
    { name: 'home' },
    { name: 'info' },
    { name: 'cart' },
    { name: 'contact' },
  ];

  constructor() {}

  toggleMenu() {
    console.log(this.isBurgerOpen)
    this.isBurgerOpen = !this.isBurgerOpen;
  }
}
