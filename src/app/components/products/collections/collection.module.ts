import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: CollectionComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(ROUTES), CommonModule],
})
export class CollectionModule {}
