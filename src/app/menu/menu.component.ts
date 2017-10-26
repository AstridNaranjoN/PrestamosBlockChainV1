import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '../util/app/app.service'

@Component({
    selector: 'bc-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent {

    constructor(private router: Router, private app: App) {

    }

    logout() {
        this.app.isLoggedIn = false;
        this.app.User = undefined;
        this.router.navigate(['/login']);
    }
}