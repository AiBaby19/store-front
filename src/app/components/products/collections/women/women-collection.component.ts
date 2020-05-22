import { Component, OnInit } from '@angular/core';
import Item from 'src/app/models/item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-women-collection',
  templateUrl: './women-collection.component.html',
  styleUrls: ['./women-collection.component.scss'],
})
export class WomenCollectionComponent implements OnInit {
  items: Item[];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => (this.items = data.items));
  }

  ngOnInit(): void {}
}
