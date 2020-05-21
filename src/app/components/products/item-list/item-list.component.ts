import { Component, OnInit, Input } from '@angular/core';
import Item from 'src/app/models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() items: Item[];
  constructor() {}

  ngOnInit(): void {}
}
