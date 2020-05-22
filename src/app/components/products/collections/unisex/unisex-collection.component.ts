import { Component, OnInit } from '@angular/core';
import Item from 'src/app/models/item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unisex-collection',
  templateUrl: './unisex-collection.component.html',
  styleUrls: ['./unisex-collection.component.scss']
})
export class UnisexCollectionComponent implements OnInit {
  items: Item[];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => (this.items = data.items));
  }

  ngOnInit(): void {
  }

}
