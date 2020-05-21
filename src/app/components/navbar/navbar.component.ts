import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  screenSize_md = 768;
  @HostListener('window:resize', [])
  public onResize() {
    this.isPhoneSize = window.innerWidth < this.screenSize_md;
    this.isBurgerOpen = !this.isPhoneSize ? false : this.isBurgerOpen;
  }
  // screenSize = window.getComputedStyle(document.documentElement).getPropertyValue('--screen-md-min');


  isBurgerOpen: boolean = false;
  isPhoneSize: boolean = window.innerWidth < this.screenSize_md;

  PAGES = [
    { name: 'home', link: '' },
    { name: 'collections' },
    { name: 'cart' },
    { name: 'about' },
    { name: 'contact' },
  ];

  constructor() {}

  toggleMenu() {
    this.isBurgerOpen = !this.isBurgerOpen;
  }
}
