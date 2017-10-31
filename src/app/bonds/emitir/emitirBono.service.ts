import { Injectable } from '@angular/core';
import { HttpServiceBase } from '../../util/app/httpBase.service';
import { Bond } from '../../models/bonds/bond.model'

@Injectable()
export class EmitirBonosService {

    constructor(private httpBase: HttpServiceBase) {
    }

    emitirBono(bono:Bond) {
         return this.httpBase.post('http://35.188.4.120:8080/bonds', bono);
         //return this.httpBase.get('/app/bonds/consultar/bonos.json');
    }
}
