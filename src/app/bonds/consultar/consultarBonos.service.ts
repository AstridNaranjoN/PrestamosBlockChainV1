import { Injectable } from '@angular/core';
import { HttpServiceBase } from '../../util/app/httpBase.service'

@Injectable()
export class ConsultarBonosService {

    constructor(private httpBase: HttpServiceBase) {
    }

    consultarBonos() {
        return this.httpBase.get('./app/bonds/consultar/bonos.json');
    }
}

