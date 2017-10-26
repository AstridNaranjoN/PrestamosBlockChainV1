import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    constructor(private router: Router, private route: ActivatedRoute) {
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