import { Component, OnInit } from '@angular/core';
import Item from 'src/app/models/item';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionComponent } from '../collection.component';

@Component({
  selector: 'app-women-collection',
  templateUrl: './women-collection.component.html',
  styleUrls: ['./women-collection.component.scss'],
})
export class WomenCollectionComponent implements OnInit {
  items: Item[];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.data.subscribe((data) => (this.items = data.items));
  }

  // viewItem(id) {
  //   this.router.navigate(['/', id])
  // }

  ngOnInit(): void {}
}
