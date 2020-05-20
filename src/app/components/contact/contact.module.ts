import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

const ROUTES: Routes = [{ path: '', component: ContactComponent }];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ]
})
export class ContactModule { }
