import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
/* let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Yoshi', 'web work', 350);
docTwo = new Payment('Oleg', 'plumbing work', 300);

const invOne = new Invoice('Mario', 'work on the Mario website', 250);
const invTwo = new Invoice('Yoshi', 'work on the Yoshi website', 350);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
}); */
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // tuples
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// tuples
let arr = ['ryu', 25, true];
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Yoshu', age: 40 });
console.log(docOne.age);
// with interfaces
/* interface Resource <T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: {name: 'shaun'}
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'pizza']
} */
//ENUMS
/* enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource <T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docTwo: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {name: 'name of the wind'}
}

const docFive: Resource<string[]> = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: ['yoshi']
} */
