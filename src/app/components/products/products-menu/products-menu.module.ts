import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsMenuComponent } from './products-menu.component';

@NgModule({
  declarations: [ProductsMenuComponent],
  imports: [CommonModule],
  exports: [ProductsMenuComponent],
})
export class ProductsMenuModule {}
