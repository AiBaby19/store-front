import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenCollectionComponent } from './men-collection.component';
import { Routes, RouterModule } from '@angular/router';
import { ItemListModule } from '../../item-list/item-list.module';

const ROUTES: Routes = [{ path: '', component: MenCollectionComponent }];

@NgModule({
  declarations: [MenCollectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ItemListModule,
  ],
})
export class MenCollectionModule {}
