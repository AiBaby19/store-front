import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() isMixedColors: boolean;

  screenSize_md = 768;
  @HostListener('window:resize', [])
  public onResize() {
    this.isPhoneSize = window.innerWidth < this.screenSize_md;
    this.isBurgerOpen = !this.isPhoneSize ? false : this.isBurgerOpen;
  }

  isPhoneSize: boolean = window.innerWidth < this.screenSize_md;
  isBurgerOpen: boolean = false;

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
