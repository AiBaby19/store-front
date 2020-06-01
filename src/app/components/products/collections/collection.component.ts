import { Component, OnInit, Optional } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';
import { DynamicStyleService } from 'src/app/services/dynamic-style.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent extends DynamicStyleService implements OnInit {
  isOnProductPage: boolean;

  constructor(private collectionService: CollectionService) {
    super();
  }

  ngOnInit(): void {
    this.isOnProductPage = this.layoutConditionsStatus.isOnProductPage;
  }

  viewProduct(id) {
    this.collectionService.viewItem(id);
  }
}
