import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenCollectionComponent } from './men-collection.component';
import { Routes, RouterModule } from '@angular/router';
import { ItemListModule } from '../../item-list/item-list.module';
import { ViewProductComponent } from '../../view-product/view-product.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MenCollectionComponent,
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../../view-product/view-product.module').then(
        (m) => m.ViewProductModule
      ),
    // resolve: { items: ItemsResolver },
    data: { type: 'men' },
  },
];

@NgModule({
  declarations: [MenCollectionComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), ItemListModule],
})
export class MenCollectionModule {}
