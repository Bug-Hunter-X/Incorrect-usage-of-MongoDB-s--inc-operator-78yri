```javascript
// Incorrect usage of $inc operator
db.collection('myCollection').updateOne( { "_id": ObjectId("65196e491234567890abcdef") }, { $inc: { "myField": "1" } } );
```