import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  viewItem(id: number) {
    this.router.navigate(['/collections/men/', id]);
  }
}