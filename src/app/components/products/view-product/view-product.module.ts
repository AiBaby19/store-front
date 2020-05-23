import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ViewProductComponent } from './view-product.component';

const ROUTES: Route[] = [{ path:'', component: ViewProductComponent}]

@NgModule({
  declarations: [ViewProductComponent],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ],
})
export class ViewProductModule { }
