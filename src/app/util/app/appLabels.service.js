"use strict";
var Labels = (function () {
    function Labels() {
        this.adquirirBono = { fecha: "Fecha Adquisición", valor: "Valor", interes: "Interés", plazo: "Plazo", estado: "Estado", prestatario: "Prestatario" };
        this.emitirBono = { fecha: "Fecha Emisión", valor: "Valor", estado: "Estado", prestamista: "Prestamista" };
        this.pagarBono = { fecha: "Emisión", valor: "Valor", estado: "Estado", interes: "Interes", total: "Valor a Pagar" };
        this.registro = { nombres: "Nombres y apellidos", email: "Correo electrónico", password: "Contraseña" };
        this.login = { email: "Correo electrónico", password: "Contraseña" };
    }
    return Labels;
}());
exports.Labels = Labels;
//# sourceMappingURL=appLabels.service.js.map