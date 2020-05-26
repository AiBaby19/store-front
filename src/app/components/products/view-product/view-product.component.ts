import {
  Component,
  OnInit,
  OnDestroy,
  Renderer2,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { globals } from '../../../globals/globals';
import { BackgroundChangeService } from 'src/app/services/background-change.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit, OnDestroy {
  global = globals;

  constructor(private bgChangeService: BackgroundChangeService) {}

  ngOnInit(): void {
    this.adjustBGtoProductPage(true);
  }

  adjustBGtoProductPage(value) {
    this.bgChangeService.changeBg({ isOnProductPage: value });
    this.bgChangeService.emitVal();
  }

  ngOnDestroy(): void {
    this.adjustBGtoProductPage(false);
  }
}
