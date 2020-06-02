import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { DynamicStyleService } from 'src/app/services/dynamic-style.service';
import Item from 'src/app/models/item';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit, OnDestroy {
  sub: Subscription;
  product: Item;

  constructor(
    private route: ActivatedRoute,
    private dSService: DynamicStyleService
  ) {
    this.adjustBGtoProductPage(true);
  }

  ngOnInit() {
    this.sub = this.route.data.subscribe(
      (data) => (this.product = data.product)
    );
  }

  adjustBGtoProductPage(value): void {
    this.dSService.changeBg({ isOnProductPage: value });
    this.dSService.emitVal();
  }

  ngOnDestroy(): void {
    this.adjustBGtoProductPage(false);
    this.sub.unsubscribe();
  }
}
