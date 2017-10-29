import { Injectable } from '@angular/core';
import { Headers } from '@angular/http'
import { HttpServiceBase } from '../../util/app/httpBase.service'

@Injectable()
export class ConsultarBonosService {

    constructor(private httpBase: HttpServiceBase) {
    }

    consultarBonos() {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
        // return this.httpBase.getWithHeaders('http://35.188.4.120:8080/bonds', headers);
        //return this.httpBase.get('http://201.232.60.131:3000/bonds');
        return this.httpBase.get('/app/bonds/consultar/bonos.json');
    }
}

