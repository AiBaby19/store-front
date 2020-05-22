import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Item from 'src/app/models/item';

@Component({
  selector: 'app-men-collection',
  templateUrl: './men-collection.component.html',
  styleUrls: ['./men-collection.component.scss'],
})
export class MenCollectionComponent implements OnInit {
  items: Item[];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => (this.items = data.items));
  }

  ngOnInit(): void {}
}
