import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicStyleService } from 'src/app/services/dynamic-style.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private dSService: DynamicStyleService) {
    this.dSService.changeBg({ isHomePage: true });
    this.dSService.emitVal();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.dSService.changeBg({ isHomePage: false });
    this.dSService.emitVal();
  }
}
