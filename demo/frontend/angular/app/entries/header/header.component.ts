import { Component } from '@angular/core';
import { Recipe } from '../shared/entry.model';

@Component({
    selector: 'app-header',
    templateUrl: "header.component.html",
    styleUrls: ["header.component.css"]
})

export class HeaderContent{
    modalContent: { title:string; data:any } = {
        title: "Loading",
        data: null
    };

    private url = (window.location.hostname === "localhost") ? "http://localhost:8080" : "";

    // ==============MODAL CONTENT===============================

    changeModalContent(e: {title:string; data:any;}) {
        this.modalContent = e;
    }
}
