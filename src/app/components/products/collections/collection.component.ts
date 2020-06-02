import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';
import { DynamicStyleService } from 'src/app/services/dynamic-style.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  isOnProductPage: boolean;

  constructor(
    private collectionService: CollectionService,
    private dSService: DynamicStyleService
  ) {
    // super();

  }

  ngOnInit(): void {
    this.dSService.layoutChange.subscribe(({isOnProductPage}) => {
     this.isOnProductPage = isOnProductPage;
    });
    // this.isOnProductPage = dSService.layoutConditionsStatus.isOnProductPage;
  }

  viewProduct(id) {
    this.collectionService.viewItem(id);
  }
}
