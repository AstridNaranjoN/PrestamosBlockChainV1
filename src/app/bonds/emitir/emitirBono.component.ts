import { Component } from '@angular/core';
import { Bond } from '../../models/bonds/bond.model';
import { Labels } from '../../util/app/appLabels.service'

@Component({
    selector: 'emitirBono',
    templateUrl: './emitirBono.component.html'
})

export class EmitirBonoComponent {

    private labels = new Labels();
    private bond:Bond = new Bond();

}