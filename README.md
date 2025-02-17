# MongoDB $inc Operator Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB: providing a string value instead of a numeric value.  The `bug.js` file shows the incorrect implementation, and `bugSolution.js` provides the correct solution.

## How to Reproduce

1.  Ensure you have a MongoDB instance running.
2.  Create a collection named `myCollection`.
3.  Insert a document with an `_id` and a `myField` (e.g., `{ _id: ObjectId("65196e491234567890abcdef"), myField: 0 }`).
4. Run the code in `bug.js`. You should encounter an error.
5. Run the code in `bugSolution.js`. This will increment the field correctly.
