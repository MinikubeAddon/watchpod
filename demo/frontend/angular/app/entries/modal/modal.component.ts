import { Component, OnDestroy, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css'],
  animations: [
    trigger('showModal', [
      state('inactive', style({
        display: 'none',
        top: '-600px',
        opacity: '0'
      })),
      state('active', style({
        display: 'relative',
        top: '0px',
        opacity: '1'
      })),
      transition('inactive <=> active', animate('500ms ease-out'))
    ])
  ]
})

export class EntryListModal implements OnChanges{
  modalShown: string;
  @Input() modalContent: { title:string; data:any; };

  constructor() {}

  ngOnChanges(e: any) {
    if(e.modalContent){
      this.modalShown = (this.modalContent.title) ? 'active': "inactive";
    }
  }
}
