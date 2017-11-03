import { Component, OnInit } from '@angular/core';
import { Bond } from '../../models/bonds/bond.model';
import { Labels } from '../../util/app/appLabels.service';
import { App } from '../../util/app/app.service';
import { AdquirirBonosService } from './adquirirBono.service'

@Component({
    selector: 'adquirirBono',
    templateUrl: './adquirirBono.component.html',
    providers: [AdquirirBonosService]
})

export class AdquirirBonoComponent implements OnInit {
    private labels = new Labels();
    private bond: Bond = new Bond();

    constructor(private app: App, private service: AdquirirBonosService) {
    }

    ngOnInit(): void {
        this.bond = this.app.Bond;
    }

    adquirirBono() {
        this.service.adquirirBono(this.bond).subscribe(
            result => alert(result),
            error => console.log(error)
        );
    }


}