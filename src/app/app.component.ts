import { Component, Renderer2 } from '@angular/core';
import { BackgroundChangeService } from './services/background-change.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private backgroundChangeService: BackgroundChangeService,
    private renderer: Renderer2
  ) {
    this.backgroundChangeService.layoutChange.subscribe((value) => {
      this.backgroundChooser(value);
    });
  }

  backgroundChooser(updatedValue) {
    const { isHomePage, isOnProductPage } = updatedValue;
    console.log(updatedValue)

    if (isHomePage || isOnProductPage) {
      this.renderer.removeClass(document.body, 'gray-bg');
      this.renderer.addClass(document.body, 'gray-black-bg');
    } else {
      this.renderer.addClass(document.body, 'gray-bg');
    }

    // if (isHomePage || isOnProductPage) {
    //   this.renderer.removeClass(document.body, 'gray-bg');
    //   this.renderer.addClass(document.body, 'gray-black-bg');
    // } else if (document.body.classList.contains('gray-black-bg')) {
    //   this.renderer.removeClass(document.body, 'gray-black-bg');
    //   this.renderer.addClass(document.body, 'gray-bg');
    // } else {
    //   this.renderer.addClass(document.body, 'gray-bg');
    // }
  }
}
