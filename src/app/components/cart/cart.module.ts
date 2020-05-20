import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';

const ROUTES: Routes = [{ path: '', component: CartComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(ROUTES), CommonModule],
})
export class CartModule {}
