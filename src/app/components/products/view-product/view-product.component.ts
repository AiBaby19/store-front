import { Component, OnInit, OnDestroy } from '@angular/core';
import { globals } from '../../../globals/globals';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit, OnDestroy {
  global = globals;

  constructor() {
    this.global.isOnProductPage = true;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.global.isOnProductPage = false;

  }

}
