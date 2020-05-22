import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from '../products.module';
import { CollectionComponent } from './collection.component';
import { ProductsMenuModule } from '../products-menu/products-menu.module';
import { ItemsResolver } from 'src/app/resolvers/itemsResolver.service';

const ROUTES: Routes = [
  {
    path: '',
    component: CollectionComponent,
    children: [
      {
        path: 'men',
        loadChildren: () =>
          import('./men/men-collection.module').then(
            (m) => m.MenCollectionModule
          ),
        resolve: { items: ItemsResolver },
        data: { type: 'men' },
      },
      {
        path: 'women',
        loadChildren: () =>
          import('./women/women-collection.module').then(
            (m) => m.WomenCollectionModule
          ),
        resolve: { items: ItemsResolver },
        data: { type: 'women' },
      },
      {
        path: 'unisex',
        loadChildren: () =>
          import('./unisex/unisex-collection.module').then(
            (m) => m.UnisexCollectionModule
          ),
        resolve: { items: ItemsResolver },
        data: { type: 'unisex' },
      },
    ],
  },
];
@NgModule({
  declarations: [CollectionComponent],
  imports: [
    RouterModule,
    RouterModule.forChild(ROUTES),
    CommonModule,
    ProductsModule,
    ProductsMenuModule,
  ],
})
export class CollectionModule {}
