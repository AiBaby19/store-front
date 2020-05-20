import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-menu',
  templateUrl: './products-menu.component.html',
  styleUrls: ['./products-menu.component.scss'],
})
export class ProductsMenuComponent implements OnInit {
  collections = [{ title: 'men' }, { title: 'woman' }, { title: 'unisex' }];

  constructor() {}

  ngOnInit(): void {}
}
