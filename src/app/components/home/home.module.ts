import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from '../products/products.module';

import { HomeComponent } from './home.component';

const ROUTES: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild(ROUTES), CommonModule, ProductsModule],
})
export class HomeModule {}
