import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackgroundChangeService } from 'src/app/services/background-change.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private bgChangeService: BackgroundChangeService) {
    this.bgChangeService.changeBg({isHomePage: true});
    this.bgChangeService.emitVal();
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.bgChangeService.changeBg({isHomePage: false});
    this.bgChangeService.emitVal();
  }

}
