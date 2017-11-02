import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Bond
} from '../../models/bonds/bond.model';
import {
  Labels
} from '../../util/app/appLabels.service'
import {
  ConsultarBonosService
} from './consultarBonos.service'
import {
  App
} from '../../util/app/app.service';
import {
  DatePipe
} from '@angular/common'

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
  private functions: {} = {
    emitidos: this.labelsBonosEmitidos,
    adquiridos: this.labelsBonosAdquiridos
  };

  constructor(private service: ConsultarBonosService, private app: App, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.service.consultarBonos().subscribe(
      result => {
        this.bonds = result
      },
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

  irAdquirir(bond: Bond) {
    this.app.Bond = bond;
    this.router.navigate(['./adquirirBono'], {
      relativeTo: this.activeRoute.parent
    });
  }

  irPagar(bond: Bond) {
    this.app.Bond = bond;
    this.router.navigate(['./pagarBonos'], {
      relativeTo: this.activeRoute.parent
    });
  }

}
