export class Bond {
    id: number;
    moneyLenderId: number;
    borrowerId: string;
    amount: number;
    installments: number;
    creationDate: Date;
    status: string;
}