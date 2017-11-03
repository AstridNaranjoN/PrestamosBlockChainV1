import { Injectable } from '@angular/core';
import { HttpServiceBase } from '../../util/app/httpBase.service';
import { Bond } from '../../models/bonds/bond.model'

@Injectable()
export class PagarBonosService {

    constructor(private httpBase: HttpServiceBase) {
    }

    pagarBono(bono:Bond) {
         return this.httpBase.post('http://104.154.210.143:8080/bonds', bono);
         //return this.httpBase.get('/app/bonds/consultar/bonos.json');
    }
}
