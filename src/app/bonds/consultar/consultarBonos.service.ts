import { Injectable } from '@angular/core';
import { HttpServiceBase } from '../../util/app/httpBase.service'

@Injectable()
export class ConsultarBonosService {

    constructor(private httpBase: HttpServiceBase) {
    }

    consultarBonos() {
         return this.httpBase.get('http://104.154.210.143:8080/bonds');
         //return this.httpBase.get('/app/bonds/consultar/bonos.json');
    }

    consultarBonosAdquiridos(id: string) {
        return this.httpBase.get('http://104.154.210.143:8080/bonds/loaner/' + id);
        //return this.httpBase.get('/app/bonds/consultar/bonos.json');
   }
}

