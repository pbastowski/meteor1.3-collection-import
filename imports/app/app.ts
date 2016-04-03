// This is how you get access to Tracker in Meteor 1.3
import { Tracker } from 'meteor/tracker';

// This is how you get the Invoices collection on the Client.
// The same collection must also be imported on the server;
import { Invoices } from '/imports/collections/invoices.ts';

export default class App {
    constructor() {
        Tracker.autorun(()=> {
                console.log('Invoices: ', JSON.stringify(Invoices.find().fetch()));
        })
    }
}

console.log('! App');
