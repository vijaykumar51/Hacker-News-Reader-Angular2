import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Config } from "../config/config";

import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService{

    constructor(private http: Http){}

    public newsHttpRequest(pageNumber: number): Observable<any>{

        let urlSearchParams: URLSearchParams = new URLSearchParams();
        urlSearchParams.set("page", pageNumber.toString());

        let requestOptions = new RequestOptions();
        requestOptions.search = urlSearchParams;

        return this.http.get(Config.newsUrl, requestOptions)
            .map((res:Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || "Server Error"));
    }

}