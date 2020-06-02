import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DynamicStyleService {
  layoutConditionsStatus = {
    isHomePage: <boolean>false,
    isOnProductPage: <boolean>false,
  };

  layoutChange: BehaviorSubject<any> = new BehaviorSubject<any>(
    this.layoutConditionsStatus
  );

  constructor() {}

  changeBg(updatedValue) {
    this.layoutConditionsStatus[Object.keys(updatedValue)[0]] = Object.values(
      updatedValue
    )[0];
  }

  emitVal() {
    this.layoutChange.next(this.layoutConditionsStatus);
  }
}
