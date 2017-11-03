import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/users/user.model';
import { App } from '../util/app/app.service';
import { Labels } from '../util/app/appLabels.service';
import {GoogleAuthService} from '../util/app/googleAuth.service'

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    private labels = new Labels();
    private user: User = new User();
    
    constructor(private router: Router, private app: App, private googleService: GoogleAuthService) {

    }

    register() {
        this.router.navigate(['/register']);
    }

immediateSignInCallback(googleUser: any, app: App, router: LoginComponent) {
        let profile = googleUser.getBasicProfile();
        let user: User = new User();
        app.User = user;
        app.User.password = undefined;
        app.User.name = profile.getName();
        app.isLoggedIn = true;
        app.User["image"] = profile.getImageUrl();
        // router.navigate(['/home'])
        // window.location.href = "/home";
        window.location.replace("/home");
        // router.router.navigate(['/home']);
        document.getElementById("login").setAttribute("style", "background:green !important");
    }

    immediateSignInError(err: any) {
        console.log(err);
    }

    logIn() {
        if(!this.googleService.isSignedIn){
            this.googleService.auth2.signIn().then((data: any, app: App, router: Router) => { this.immediateSignInCallback(data, this.app, this) }, this.immediateSignInError);
            return; 
        }

        this.router.navigate(['/home']);
        
    }
}