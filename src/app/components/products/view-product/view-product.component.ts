import { Component, OnDestroy } from '@angular/core';
import { DynamicStyleService } from 'src/app/services/dynamic-style.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnDestroy {
  constructor(private dSService: DynamicStyleService) {
    this.adjustBGtoProductPage(true);
  }

  adjustBGtoProductPage(value): void {
    this.dSService.changeBg({ isOnProductPage: value });
    this.dSService.emitVal();
  }

  ngOnDestroy(): void {
    this.adjustBGtoProductPage(false);
  }
}
