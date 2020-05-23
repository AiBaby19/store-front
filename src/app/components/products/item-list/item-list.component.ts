import { Component, OnInit, Input, Output } from '@angular/core';
import Item from 'src/app/models/item';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() items: Item[];
  @Output() showItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  viewItem(id: number) {
    this.showItem.emit(id);
  }

  ngOnInit(): void {}
}
