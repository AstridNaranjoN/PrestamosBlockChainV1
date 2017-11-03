import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GoogleAuthService } from '../util/app/googleAuth.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        if (!this.googleService.isSignedIn){
            this.router.navigate(['/login']);
            return;
        }
    }

    constructor(private router: Router, private route: ActivatedRoute, private googleService: GoogleAuthService) {
    }

    emitirBono() {
        this.router.navigate(['./emitirBono'], { relativeTo: this.route });
    }

    adquirirBono() { 
        this.router.navigate(['./adquirirBono'], { relativeTo: this.route });
    }

    consultarBonos() { 
        this.router.navigate(['./consultarBonos'], { relativeTo: this.route });
    }

    pagarBonos() { 
        this.router.navigate(['./pagarBonos'], { relativeTo: this.route });
    }
}