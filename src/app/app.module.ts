import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './components/navbar/navbar.module';

import { AppComponent } from './app.component';
import { BackgroundChangeService } from './services/background-change.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavbarModule],
  providers: [BackgroundChangeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
