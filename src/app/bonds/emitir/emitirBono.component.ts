import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Bond } from '../../models/bonds/bond.model';
import { Labels } from '../../util/app/appLabels.service';
import { EmitirBonosService } from './emitirBono.service';
import { DatePipe } from '@angular/common'

@Component({
    selector: 'emitirBono',
    templateUrl: './emitirBono.component.html',
    providers: [EmitirBonosService]
})

export class EmitirBonoComponent {

    private labels = new Labels();
    private bond: Bond = new Bond();

    constructor(private service: EmitirBonosService, private router: Router, private activeRoute: ActivatedRoute) {
        this.bond.creationDate = new Date();

    }
    emitirBono() {
        this.service.emitirBono(this.bond).subscribe(
            result => {
                alert(result);
                this.goToBondslist();
            },
            error => console.log(error)
        );
    }

    cancelar() {
        this.bond = new Bond();
        this.goToBondslist();
    }

    goToBondslist(): void {
        this.router.navigate(['./consultarBonos'], { relativeTo: this.activeRoute.parent });
    }
}