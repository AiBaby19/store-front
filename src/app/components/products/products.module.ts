import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsMenuModule } from './products-menu/products-menu.module';

import { ProductsComponent } from './products.component';
import { ItemListModule } from './item-list/item-list.module';
import { CollectionComponent } from './collections/collection.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductsMenuModule, ItemListModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
