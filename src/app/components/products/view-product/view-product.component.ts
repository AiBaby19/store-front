import {
  Component,
  OnInit,
  OnDestroy,
  Renderer2,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { globals } from '../../../globals/globals';
import {
  BackgroundChangeService,
  DynamicStyleService,
} from 'src/app/services/dynamic-style.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit, OnDestroy {
  global = globals;

  constructor(private dSService: DynamicStyleService) {}

  ngOnInit(): void {
    this.adjustBGtoProductPage(true);
  }

  adjustBGtoProductPage(value) {
    this.dSService.changeBg({ isOnProductPage: value });
    this.dSService.emitVal();
  }

  ngOnDestroy(): void {
    this.adjustBGtoProductPage(false);
  }
}
