import { Component, OnInit } from '@angular/core';
import { Bond } from '../../models/bonds/bond.model';
import { Labels } from '../../util/app/appLabels.service'
import { ConsultarBonosService } from './consultarBonos.service'

@Component({
    selector: 'consultarBonos',
    templateUrl: './consultarBonos.component.html',
    providers: [ConsultarBonosService]
})

export class ConsultarBonosComponent implements OnInit {

    private option: string = 'emitidos';
    private labels = new Labels();
    private currentLabels = this.labels.emitirBono;
    private bonds: Bond[] = [];
    private functions: {} = { emitidos: this.labelsBonosEmitidos, adquiridos: this.labelsBonosAdquiridos };

    constructor(private service: ConsultarBonosService) {
    }

    ngOnInit(): void {
        this.service.consultarBonos().subscribe(
            result => this.bonds = result,
            error => console.log(error)
        );
    }

    labelsBonosEmitidos(labels: Labels) {
        return labels.emitirBono;
    }

    labelsBonosAdquiridos(labels: Labels) {
        return labels.adquirirBono;
    }

    find(value: string) {
        this.option = value;
        this.currentLabels = this.functions[value](this.labels);
    }

    irPagar(id: number){
        alert('pagar');
    }

}