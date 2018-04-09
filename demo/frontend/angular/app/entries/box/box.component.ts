import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Recipe } from '../shared/entry.model';

@Component({
    selector: 'app-box',
    templateUrl: 'box.component.html',
    styleUrls: ['box.component.css'],
    animations: [
        trigger('showContent', [
            state('inactive', style({
                height: '0px',
                display: 'none'
            })),
            state('active', style({
                height: '*',
                display: 'block'
            })),
            transition('* <=> *', animate('500ms ease-in-out'))
        ])
    ]
})

export class Box {
    @Output() entryEdit = new EventEmitter<{
        title:string;
        data:any;
    }>();
    @Input() box: any;

    contentShown: string;
    constructor(){
        this.contentShown = 'inactive';
    }

    show(e: any){
        if(e) e.preventDefault();
        this.contentShown = (this.contentShown === 'inactive') ? 'active': 'inactive';
    }

    edit(e: any){
        this.entryEdit.emit(e);
    }
}
