import { Component, Renderer2, HostListener, OnInit } from '@angular/core';
import { DynamicStyleService } from './services/dynamic-style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  windowSize: number;
  breakPoint: number = 767;
  bgConditions: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowSize = event.target.innerWidth;
    this.chooseBackground();
  }

  navMixedColors: boolean;

  constructor(
    private dSService: DynamicStyleService,
    private renderer: Renderer2
  ) {
    this.dSService.layoutChange.subscribe((value) => {
      this.bgConditions = value;
      this.chooseBackground();
    });
  }

  ngOnInit() {
    this.windowSize = window.innerWidth;
    this.chooseBackground();
  }

  chooseBackground() {
    if (this.showMixedBG) {
      this.makeMixedBG();
      this.toggleNavColors(true);
    } else {
      this.makeGrayBG();
      this.toggleNavColors(false);
    }
  }

  public get showMixedBG() {
    const { isHomePage, isOnProductPage } = this.bgConditions;
    return (
      (isHomePage || isOnProductPage) && this.windowSize >= this.breakPoint
    );
  }

  toggleNavColors(value) {
    this.navMixedColors = value;
  }

  makeMixedBG() {
    this.renderer.removeClass(document.body, 'gray-bg');
    this.renderer.addClass(document.body, 'gray-black-bg');
  }

  makeGrayBG() {
    this.renderer.addClass(document.body, 'gray-bg');
  }
}
