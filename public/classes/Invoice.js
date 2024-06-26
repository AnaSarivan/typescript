//classes
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}!`;
    }
}
// classes
/* class Invoice {
    readonly client: string;
    private details: string;
    amount: number;

    constructor(c: string, d: string, a:number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}!`
    }
} */
//a bit different approach
