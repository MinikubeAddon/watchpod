import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// declare var gapi: any;
@Injectable()
export class EntryService {
    constructor(private http: Http){}

    // ===============RECIPES==================================
    getEntries(): Promise<any[]> {
        return this.http.get(`http://192.168.64.14:31025`)
            .toPromise()
            .then(response => response['box'] as any[])
    }
}
