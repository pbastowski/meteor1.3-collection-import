# How to import a Mongo.Collection using Meteor 1.3

This repo exists only to illustrate how to import collections in Meteor 1.3. Please look at the code to see how it works.

Oh, did I mention that it uses TypeScript? No? Ok, it does.

## Don't have time to read my f#$%^&g code...

OK, so, it's like this:

Create file `/imports/collections/my-collection.ts` and put the code below into it

```js
import { Mongo } from 'meteor/mongo';
export var MyCollection = new Mongo.Collection('MyCollection');
```

In `/client/app.ts`, or whatever client JS file you need `MyCollection` in

```js
import { MyCollection } from '/imports/collections/my-collection'
```

In `/server/collections.ts`

```js
import { MyCollection } from '/imports/collections/my-collection'
```

**Note** that you must import your collection on the server, otherwise Meteor will not synchronise the data between client and server side and your client side MyCollection object will return no data.
