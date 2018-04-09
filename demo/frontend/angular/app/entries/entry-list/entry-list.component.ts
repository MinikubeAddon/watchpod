import { Component, OnInit, OnChanges, AfterContentInit, Output, EventEmitter, Input, NgZone } from '@angular/core';
import { EntryService } from '../shared/entry.service';
import { Recipe } from '../shared/entry.model';

@Component({
    selector: 'app-entry-list',
    templateUrl: 'entry-list.component.html',
    styleUrls: ['entry-list.component.css']
})

export class EntryListComponent implements OnInit {
    @Output() updateModal = new EventEmitter<{
        title:string;
        data:any;
    }>();

    @Input() modalContent: {
        title:string;
        data:any;
    }
    entries: any;

    private url = (window.location.hostname === "localhost") ? "http://localhost:8080" : "";
    constructor(private entryService: EntryService, private ngZone: NgZone){}

    ngOnInit(){
        this.init()
    }

    init(){
        this.entryService
        .getEntries()
        .then(entries => {
            //combine user and api recipes
            console.log(entries);
            this.entries = entries;
            this.toggle();
        })
        .catch(err => {
            console.log(err);
            this.toggle();
        });
    }

    //get rid of modal
    toggle(){
        //TOGGLE DOES NOT APPEAR TO WORK UNLESS ANOTHER ENTRY IS INSERTED
        if(this.modalContent.title){
            this.updateModal.emit({
                title: '',
                data: null
            })
        }
    }
}
