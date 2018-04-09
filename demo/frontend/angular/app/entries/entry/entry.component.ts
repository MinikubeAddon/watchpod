import { Component, Input, AfterContentInit, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { EntryService } from '../shared/entry.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Recipe } from '../shared/entry.model';
import * as $ from "jquery";


@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css'],
    animations: [
        trigger('showContent', [
            state('inactive', style({
                height: '0px'
            })),
            state('active', style({
                height: '*'
            })),
            transition('* <=> *', animate('500ms ease-in-out'))
        ]),
        trigger('expand', [
            state('inactive', style({
                maxWidth: '300px'
            })),
            state('active', style({
                maxWidth: '1200px'
            })),
            transition('* <=> *', animate('500ms ease-in-out'))
        ]),
        trigger('grow', [
            state('inactive', style({
                fontSize: '120%'
            })),
            state('active', style({
                fontSize: '170%'
            })),
            transition('* <=> *', animate('500ms ease-in-out'))
        ]),
        trigger('button', [
            state('inactive', style({
                padding: '0px 5px 0px 5px'
            })),
            state('active', style({
                padding: '0px 35px 0px 35px',
            })),
            transition('* <=> *', animate('500ms ease-in-out'))
        ])
    ]
})

export class EntryComponent implements AfterContentInit{
    @Input() entry: Recipe;

    contentShown: string;
    cloud: string;
    edit: string;
    title: string;

    constructor(private entryService: EntryService){
        this.contentShown = 'inactive';
        this.cloud = '';
        this.edit = '';
        this.title = '';
    }


    ngAfterContentInit(){
        this.cloud = (this.entry.pic.includes("http:")) ? "original": "added";
        this.edit = (this.entry.href.includes("http")) ? "original": "added";
        this.title = (this.contentShown === 'inactive') ? `${this.entry.title.slice(0, 20)}...`: this.entry.title;
    }

    getImage(str: any){
        return str.replace("http://", "https://");
    }

    changeState(e: any) {
        if(e) e.preventDefault();

        this.contentShown = (this.contentShown === 'inactive') ? 'active': 'inactive';
        this.title = (this.contentShown === 'inactive') ? `${this.entry.title.slice(0, 12)}...`: this.entry.title;
    }
}
