import { Injectable } from '@angular/core';
import { Subscription, Observable, Subject, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackgroundChangeService {
  isOnProductPage: boolean = false;
  isHomePage: boolean = false;

  layoutConditionsStatus = {
    isHomePage: <boolean>this.isHomePage,
    isOnProductPage: <boolean>this.isOnProductPage,
  };

  layoutChange: BehaviorSubject<any> = new BehaviorSubject<any>(
    this.layoutConditionsStatus
  );

  constructor() {}

    changeBg(updatedValue) {
      this.layoutConditionsStatus[Object.keys(updatedValue)[0]] = Object.values(updatedValue)[0];

    }

  emitVal() {
    this.layoutChange.next(this.layoutConditionsStatus);
  }
}
