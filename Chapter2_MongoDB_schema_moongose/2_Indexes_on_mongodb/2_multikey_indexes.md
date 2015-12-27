### Multikey indexes

This is used when we need to search inside arrays.
Info: https://docs.mongodb.org/v3.0/core/index-multikey/

Example:

$ mongo
show dbs
use test3

As we saw on the "1_simple_indexes.md" when we create indexes over some particular field, mongodb returns the value faster.

Now, we want also to return fast the result, but when we have to search inside an array.

We create 500000 documents which name value is an array of names
for (var i=0; i<500000;i++) { db.names2.insert({ name: [ '' + i ]}); }

db.names.insert({name:['Jorge']})
db.names.find({name:'Jorge'}) // This will take some delay (mongodb traverse all documents)

#### Solution: creating a multikey index over the array.

db.names.createIndex({ names:1 })

But be aware on arrays that grows without bound!! Because can be really expensive in terms of bandwith