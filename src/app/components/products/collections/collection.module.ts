import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './collection.component';
import { ProductsMenuModule } from '../products-menu/products-menu.module';
import { ItemsResolver } from 'src/app/resolvers/itemsResolver.service';
import { CollectionService } from 'src/app/services/collection.service';

const ROUTES: Routes = [
  {
    path: '',
    component: CollectionComponent,
    children: [
      {
        path: 'men',
        // outlet: 'collections',
        loadChildren: () =>
          import('./men/men-collection.module').then(
            (m) => m.MenCollectionModule
          ),
        resolve: { items: ItemsResolver },
        data: { type: 'men' },
      },
      {
        path: 'women',
        // outlet: 'collections',
        loadChildren: () =>
          import('./women/women-collection.module').then(
            (m) => m.WomenCollectionModule
          ),
        resolve: { items: ItemsResolver },
        data: { type: 'women' },
      },
      {
        path: 'unisex',
        // outlet: 'collections',
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
    ProductsMenuModule,
  ],
  providers: [CollectionService],
})
export class CollectionModule {}
