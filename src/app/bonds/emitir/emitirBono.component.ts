import { Component } from '@angular/core';
import { Bond } from '../../models/bonds/bond.model';
import { Labels } from '../../util/app/appLabels.service';
import { EmitirBonosService } from './emitirBono.service';
import { DatePipe } from '@angular/common'

@Component({
    selector: 'emitirBono',
    templateUrl: './emitirBono.component.html', 
    providers:[EmitirBonosService]
})

export class EmitirBonoComponent {

    private labels = new Labels();
    private bond: Bond = new Bond();

    constructor(private service:EmitirBonosService) {
        this.bond.creationDate = new Date();

    }
    emitirBono() {
        this.bond.borrowerId = "astridnaranjon@gmail.com";
        this.bond.status = "CREATED";
        this.bond.creationDate = new Date (this.bond.creationDate);
        this.service.emitirBono (this.bond).subscribe(
            result => alert (result),
            error => console.log(error)
        );
    }
}