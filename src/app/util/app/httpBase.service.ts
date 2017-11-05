import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Injectable()
export class HttpServiceBase {

    private urlService: string = "http://35.202.189.12:8080/";

    private headers: Headers;
    
    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
    }

    get(apiUrl: string) {
        return this.http.get(this.urlService + apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getWithHeaders(apiUrl: string, headers: Headers) {
        return this.http.get(apiUrl, { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    post(apiUrl: string, model: any) {
        let ro = new RequestOptions({ headers: this.headers })
        return this.http.post(this.urlService + apiUrl, model, ro)
            .map(this.extractData)
            .catch(this.handleError);
    }
  
    put(apiUrl: string, model: any) {
        let ro = new RequestOptions({ headers: this.headers })
        return this.http.put(this.urlService + apiUrl, model, ro)
            .map(this.extractData)
            .catch(this.handleError);
    }
    

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}