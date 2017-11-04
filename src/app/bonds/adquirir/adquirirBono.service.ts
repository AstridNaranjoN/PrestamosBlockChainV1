import { Injectable } from '@angular/core';
import { HttpServiceBase } from '../../util/app/httpBase.service';
import { Bond } from '../../models/bonds/bond.model';
import { GoogleAuthService } from '../../util/app/googleAuth.service'

@Injectable()
export class AdquirirBonosService {

    constructor(private httpBase: HttpServiceBase, private googleService: GoogleAuthService) {
    }

    adquirirBono(bono: Bond) {
        bono.status = "PUT";
        bono.installments = 3;
        bono.borrowerId = this.googleService.email;
        return this.httpBase.put('http://104.154.210.143:8080/bonds', bono);
    }
}
