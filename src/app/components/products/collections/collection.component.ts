import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';
import { Router, ActivatedRoute } from '@angular/router';
import { globals } from '../../../globals/globals';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  // will call http products by title
  global = globals;
  constructor(private collectionService: CollectionService) {}

  viewProduct(id) {
    this.collectionService.viewItem(id);
  }

  ngOnInit(): void {}
}
