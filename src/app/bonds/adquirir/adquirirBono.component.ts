import { Component } from '@angular/core';
import { Bond } from '../../models/bonds/bond.model';
import { Labels } from '../../util/app/appLabels.service'

@Component({
    selector: 'adquirirBono',
    templateUrl: './adquirirBono.component.html'
})

export class AdquirirBonoComponent {

    private labels = new Labels();
    private bond: Bond = new Bond();

}