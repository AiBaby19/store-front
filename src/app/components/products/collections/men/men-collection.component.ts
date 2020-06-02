import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Item from 'src/app/models/item';
import { CollectionComponent } from '../collection.component';
import { CollectionService } from 'src/app/services/collection.service';
import { DynamicStyleService } from 'src/app/services/dynamic-style.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-men-collection',
  templateUrl: './men-collection.component.html',
  styleUrls: ['./men-collection.component.scss'],
})
export class MenCollectionComponent extends CollectionComponent
  implements OnInit, OnDestroy {
  items: Item[];
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    collectionService: CollectionService,
    dSService: DynamicStyleService
  ) {
    super(collectionService, dSService);

    this.sub = this.route.data.subscribe((data) => (this.items = data.items));
  }

  viewItem(id: number) {
    this.viewProduct(id);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
