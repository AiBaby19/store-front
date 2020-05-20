import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchComponent } from '../search/search.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent, SearchComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
