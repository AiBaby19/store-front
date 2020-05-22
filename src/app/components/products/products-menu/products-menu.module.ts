import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsMenuComponent } from './products-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductsMenuComponent],
})
export class ProductsMenuModule {}
