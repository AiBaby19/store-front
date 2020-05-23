import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Item from 'src/app/models/item';
import { CollectionComponent } from '../collection.component';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-men-collection',
  templateUrl: './men-collection.component.html',
  styleUrls: ['./men-collection.component.scss'],
})
export class MenCollectionComponent extends CollectionComponent implements OnInit {
  items: Item[];

  constructor(private route: ActivatedRoute, collectionService: CollectionService) {
    super(collectionService);
    this.route.data.subscribe((data) => (this.items = data.items));
  }

  viewItem(id: number) {
    this.viewProduct(id)
  }

  ngOnInit(): void {}
}
