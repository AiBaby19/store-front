import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { DetailsComponent } from './details/details.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [ItemComponent, DetailsComponent, TitleComponent],
  imports: [
    CommonModule
  ],
  exports: [ItemComponent]
})
export class ItemModule { }
