import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemModule } from './item/item.module';
import { ItemListComponent } from './item-list.component';


@NgModule({
  declarations: [ItemListComponent],
  imports: [
    CommonModule,
    ItemModule
  ],
  exports: [ItemListComponent]
})
export class ItemListModule { }
