```javascript
// Correct usage using $exists operator
db.collection.find({ field: { $exists: true } });

// Alternative: Handle empty array case
const queryArray = someArray.length > 0 ? someArray : null;

if(queryArray) {
  db.collection.find({ field: { $in: queryArray } });
} else {
  db.collection.find({ field: { $exists: true } }); //or handle it differently
}
```