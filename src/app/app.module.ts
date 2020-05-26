import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './components/navbar/navbar.module';

import { AppComponent } from './app.component';
import { DynamicStyleService } from './services/dynamic-style.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavbarModule],
  providers: [DynamicStyleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
