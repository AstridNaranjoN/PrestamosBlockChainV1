import { Injectable } from '@angular/core';

declare const gapi: any;

@Injectable()
export class GoogleAuthService {
    public auth2: any;

    constructor() {
        this.googleInit();
    }

    private get isReady(): boolean {
        if (gapi.auth2 === undefined) {
            return false;
        }

        if (this.auth2 === undefined) {
            return false
        }

        return true;
    }

    public get isSignedIn(): boolean {
        if (!this.isReady) {
            return false;
        }
        return this.auth2.isSignedIn.get();
    }

    public get userName(): string {
        if (!this.isReady) {
            return '';
        }
        return gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName();
    }

    public get email(): string {
        if (!this.isReady) {
            return '';
        }
        return gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail();
    }

    public get userImage(): string {
        if (!this.isReady) {
            return '';
        }
        return gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getImageUrl();
    }

    public googleInit() {
        if (gapi.auth2 === undefined) {
            gapi.load('auth2', () => {
                if (gapi.auth2.getAuthInstance() === null) {
                    this.auth2 = gapi.auth2.init({
                        key: 'AIzaSyCoAP7zPEITSLnOZeWPKLnRGQxXm5tObLs',
                        client_id: '742966271455-e09nv94k2o3f2es5d64ga3gi08k1ff5j.apps.googleusercontent.com',
                        cookiepolicy: 'single_host_origin',
                        scope: 'profile email',
                    });
                }
                else {
                    this.auth2 = gapi.auth2.getAuthInstance();
                }
            });
        }
    }

    public signOut(callbackFunction: any) {
        this.auth2.signOut().then(() => { callbackFunction() });
        this.auth2.disconnect();
    }
}