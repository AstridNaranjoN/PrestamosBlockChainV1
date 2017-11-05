import { Injectable } from '@angular/core';
import { HttpServiceBase } from '../../util/app/httpBase.service';
import { Bond } from '../../models/bonds/bond.model'

@Injectable()
export class PagarBonosService {

    constructor(private httpBase: HttpServiceBase) {
    }

    pagarBono(bono: Bond) {
        return this.httpBase.post('bonds/', bono);
    }
}
