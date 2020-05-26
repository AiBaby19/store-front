import { Component, Renderer2 } from '@angular/core';
import { DynamicStyleService } from './services/dynamic-style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navMixedColors: boolean;

  constructor(
    private dSService: DynamicStyleService,
    private renderer: Renderer2
  ) {
    this.dSService.layoutChange.subscribe((value) => {
      this.backgroundChooser(value);
    });
  }

  backgroundChooser(updatedValue) {
    const { isHomePage, isOnProductPage } = updatedValue;

    if (isHomePage || isOnProductPage) {
      this.renderer.removeClass(document.body, 'gray-bg');
      this.renderer.addClass(document.body, 'gray-black-bg');
      this.navMixedColors = true;
    } else {
      this.renderer.addClass(document.body, 'gray-bg');
      this.navMixedColors = false;
    }
  }
}
