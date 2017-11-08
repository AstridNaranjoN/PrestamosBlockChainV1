import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { GoogleAuthService } from '../app/googleAuth.service'

@Injectable()
export class HttpServiceBase {
    
    //private urlService: string = "http://localhost:55612/";
    private urlService: string = "http://35.202.173.22:8080/";
    private accessToken: string = "";

    private headers: Headers;
    private requestOptions: RequestOptions;


    constructor(private http: Http, private googleService: GoogleAuthService) {
        this.headers = new Headers();
        this.headers.set("Content-Type", "application/json");
        this.addAuthorizationHeader();
        this.requestOptions = new RequestOptions({ headers: this.headers })
        
    }

    addAuthorizationHeader() {
        if (this.googleService.isSignedIn) {
            this.headers.set("x-authorization", "Bearer " + this.googleService.auth2.currentUser.get().getAuthResponse().id_token);
            //this.headers.set("x-authorization", "Bearer " + "eyJhbGciOiJSUzI1NiIsImtpZCI6ImExMmMzYTYxMDkxOTMzMDgzMDA3OTkyNWRmOWM5NWFkODUyNzQ1ODAifQ.eyJhenAiOiI3NDI5NjYyNzE0NTUtZTA5bnY5NGsybzNmMmVzNWQ2NGdhM2dpMDhrMWZmNWouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3NDI5NjYyNzE0NTUtZTA5bnY5NGsybzNmMmVzNWQ2NGdhM2dpMDhrMWZmNWouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE1MjI4ODU4MzUwODI4OTI4OTciLCJlbWFpbCI6ImFzdHJpZG5hcmFuam9uQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiQUY1U1hpVVRycGx4bHFiRWVCeGJjdyIsImlzcyI6ImFjY291bnRzLmdvb2dsZS5jb20iLCJqdGkiOiIxYTM5ZDRiNTdkYjM4YWM3ZjNkZTQyM2Q4ZmI4Y2M4MjAzZDhhN2ViIiwiaWF0IjoxNTEwMTQyMDA2LCJleHAiOjE1MTAxNDU2MDYsIm5hbWUiOiJBc3RyaWQgTmFyYW5qbyIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLW81b3RTR0pNaEZzL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUQ0L0lvVmxQblVtdF9rL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJBc3RyaWQiLCJmYW1pbHlfbmFtZSI6Ik5hcmFuam8iLCJsb2NhbGUiOiJlcy00MTkifQ.OJwaNpox2AF-bmRznk8ZA-B-TIfXfgaA8UtQ1kaq7jbIDyb4IPrlJFhzL1V2qGIMwxR5j4imZJDhiBM0trV2Qi2pLcEIrCEiHJKNJlpfS6Rot0ki_2eF_XcVzgRtIIEK9snN9c_PNOsd3TIgMT83XfeL3-d0xKZ7IREhy7Js-NUHAEwIfOAbSDt46q-6GNHPtR2Gom4PnE8Kjr4M5urCDnN4O1xWocrGqu5ClL7L0Jbra78farg_E8Iju-2z3orF2Ufppuw_7oBuErDl-SAeFFyIGPv0xCxEjJ6vikDN6GxMplgYiPk1fsIPs8ImO9OJAs7rMRxbjB1vSTlEQt-g8Q");
            this.headers.set("client_id", this.googleService.clientId)
            //this.headers.set("client_id", "742966271455-e09nv94k2o3f2es5d64ga3gi08k1ff5j.apps.googleusercontent.com")
        }
    }
    get(apiUrl: string) {
        return this.http.get(this.urlService + apiUrl, this.requestOptions )
            .map(this.extractData)
            .catch(this.handleError)
    }

    post(apiUrl: string, model: any) {
        return this.http.post(this.urlService + apiUrl, model, this.requestOptions)
            .map(this.extractData)
            .catch(this.handleError);
    }

    put(apiUrl: string, model: any) {
        return this.http.put(this.urlService + apiUrl, model, this.requestOptions)
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