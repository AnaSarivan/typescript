// interface
const me = {
    name: 'Yoshi',
    age: 24,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('Hello', person.name + '!');
};
greetPerson(me);
//console.log(me)
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('Mario', 'work on the Mario website', 250);
const invTwo = new Invoice('Yoshi', 'work on the Yoshi website', 350);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
