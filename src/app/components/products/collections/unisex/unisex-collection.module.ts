import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UnisexCollectionComponent } from './unisex-collection.component';
import { ItemListModule } from '../../item-list/item-list.module';

const ROUTES: Routes = [{ path: '', component: UnisexCollectionComponent }];

@NgModule({
  declarations: [UnisexCollectionComponent],
  imports: [RouterModule.forChild(ROUTES), CommonModule, ItemListModule],
})
export class UnisexCollectionModule {}
