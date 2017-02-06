import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class TransactionsService {

    constructor(private http: Http) {   }

    getData() {
        let url = 'https://lotto-5ff57.firebaseio.com/data.json';

        return this.http.get(url)
            .map(res => res.json())
            .catch(this.handleError);        
    }


    private handleError(error: any) {
        return Observable.throw(error.json());
    }



}