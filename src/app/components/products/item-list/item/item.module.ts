import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [ItemComponent, DetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [ItemComponent]
})
export class ItemModule { }
