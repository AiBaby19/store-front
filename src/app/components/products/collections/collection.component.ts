import { Component, OnInit, Renderer2, Optional } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';
import { Router, ActivatedRoute } from '@angular/router';
import { globals } from '../../../globals/globals';
import { BackgroundChangeService } from 'src/app/services/background-change.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  // will call http products by title
  global = globals;
  constructor(
    private collectionService: CollectionService,
    private backgroundChange?: BackgroundChangeService
    // private renderer: Renderer2
  ) {


    // this.renderer.removeClass(document.body, 'gray-black-bg');
    // this.renderer.addClass(document.body, 'gray-bg');
  }


  viewProduct(id) {
    this.collectionService.viewItem(id);
  }

  ngOnInit(): void {
    this.backgroundChange.layoutConditionsStatus.isHomePage = false;

  }

  ngAfterViewInit(): void {
    // this.elRef.nativeElement.ownerDocument.body.style.backgroundColor = 'red';
  }
}
