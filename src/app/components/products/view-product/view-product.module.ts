import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ViewProductComponent } from './view-product.component';
import { ProductResolver } from 'src/app/resolvers/product-resolver.service';

const ROUTES: Route[] = [
  {
    path: '',
    component: ViewProductComponent,
    resolve: { product: ProductResolver },
  },
];

@NgModule({
  declarations: [ViewProductComponent],
  imports: [RouterModule.forChild(ROUTES), CommonModule],
  providers: [ProductResolver],
})
export class ViewProductModule {}
