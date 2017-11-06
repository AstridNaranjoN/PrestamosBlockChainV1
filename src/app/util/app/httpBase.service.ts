import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { GoogleAuthService } from '../app/googleAuth.service'

@Injectable()
export class HttpServiceBase {

    private urlService: string = "http://35.202.189.12:8080/";
    private accessToken: string = "";

    private headers: Headers;

    constructor(private http: Http, private googleService: GoogleAuthService) {
        this.headers = new Headers();
        this.headers.set("Content-Type", "application/json");
        this.addAuthorizationHeader();
    }

    addAuthorizationHeader() {
        if (this.googleService.isSignedIn) {
            this.headers.set("x-Authorization", "bearer " + this.googleService.auth2.currentUser.get().getAuthResponse().access_token);
            this.headers.set("client_id", this.googleService.clientId)
        }
    }
    get(apiUrl: string) {
        return this.http.get(this.urlService + apiUrl, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    post(apiUrl: string, model: any) {
        return this.http.post(this.urlService + apiUrl, model, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    put(apiUrl: string, model: any) {
        return this.http.put(this.urlService + apiUrl, model, { headers: this.headers })
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