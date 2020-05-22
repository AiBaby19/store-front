import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WomenCollectionComponent } from './women-collection.component';
import { ItemListModule } from '../../item-list/item-list.module';


const ROUTES: Routes = [{ path: '', component: WomenCollectionComponent }];

@NgModule({
  declarations: [WomenCollectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ItemListModule
  ]
})
export class WomenCollectionModule { }
