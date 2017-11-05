import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/users/user.model';
import { App } from '../util/app/app.service';
import { Labels } from '../util/app/appLabels.service';
import { GoogleAuthService } from '../util/app/googleAuth.service'

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    ngOnInit(): void {
        this.name = this.googleService.userName;
        this.image = this.googleService.userImage;
    }

    private labels = new Labels();
    private user: User = new User();
    private name: string = "";
    private image: string = "";

    constructor(private router: Router, private app: App, private googleService: GoogleAuthService) {
    }


    immediateSignInError(err: any) {
        console.log(err);
    }

    logIn() {
        if (!this.googleService.isSignedIn) {
            this.googleService.auth2.signIn().then(() => { return; }, this.immediateSignInError);
            return;
        }

        this.router.navigate(['/home']);

    }
}