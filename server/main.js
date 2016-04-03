// You must import the Invoices collection on the server, otherwise
// Meteor will not synchronise the client collection with the server.
import { Invoices } from '/imports/collections/invoices.ts';

console.log('Invoices: ', JSON.stringify(Invoices.find().fetch()));
