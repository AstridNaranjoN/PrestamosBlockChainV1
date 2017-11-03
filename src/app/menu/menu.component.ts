import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '../util/app/app.service';
import { GoogleAuthService } from '../util/app/googleAuth.service'

@Component({
    selector: 'bc-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent {
   
    private name: string = "";
    private image: string = "";

    constructor(private router: Router, private app: App, private googleService: GoogleAuthService) {
        this.name = this.googleService.userName;
        this.image = this.googleService.userImage;
    }

    logout() {
      this.googleService.signOut ((router: Router = this.router) => (this.close(router)));
    }

    close(router: Router) {
        router.navigate (['/login']);
    }
}