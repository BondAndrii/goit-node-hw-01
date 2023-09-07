const yargs = require('yargs');
const {hideBin} = require("yargs/helpers")

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone })=> {
    switch (action) {
        case 'list':
            const data = await contacts.listContacts();
            return console.log(data);
        case 'get':
            const contactById = await contacts.getContactById(id);
            return console.log(contactById);
        case 'add':
            const newContact = await contacts.addContact({ name, email, phone });
            return console.log(newContact);
        case 'remove':
            const deleteById = await contacts.removeContact(id)
            return console.log(deleteById);
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

const arr = hideBin(process.argv);
const {argv} = yargs(arr);
invokeAction(argv);
