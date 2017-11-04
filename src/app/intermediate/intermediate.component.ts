import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthService } from '../util/app/googleAuth.service';

@Component({
    selector: 'intermediate',
    template: '<h2>Cargando...</h2>',
})

export class IntermediateComponent implements OnInit {
    
    constructor(private router: Router, private googleService: GoogleAuthService) {
        if (this.googleService.isSignedIn){
            this.router.navigate(['/home']);
            return;
        }
        // this.router.navigate(['/home']);
    }

    ngOnInit(): void {
        if (this.googleService.isSignedIn){
            this.router.navigate(['/home']);
            return;
        }
    }
    
}