import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/users/user.model';
import { App } from '../util/app/app.service';
import { Labels } from '../util/app/appLabels.service'

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    private labels = new Labels();
    private user: User = new User();
    
    constructor(private router: Router, private app: App) {

    }

    register() {
        this.router.navigate(['/register']);
    }

    onSubmit() {
        this.app.User = this.user;
        this.app.User.password = undefined;
        this.app.User.name = "Astrid Naranjo";
        this.app.isLoggedIn = true;
        this.router.navigate(['/home']);
    }
}