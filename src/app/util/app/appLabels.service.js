"use strict";
var Labels = (function () {
    function Labels() {
        this.adquirirBono = { fecha: "Fecha Adquisición", valor: "Valor", interes: "Interés", plazo: "Plazo", estado: "Estado" };
        this.emitirBono = { fecha: "Fecha Emisión", valor: "Valor", estado: "Estado" };
        this.registro = { nombres: "Nombres y apellidos", email: "Correo electrónico", password: "Contraseña" };
        this.login = { email: "Correo electrónico", password: "Contraseña" };
    }
    return Labels;
}());
exports.Labels = Labels;
//# sourceMappingURL=appLabels.service.js.map