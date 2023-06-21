# oci-ndcs-example-nodejs

## Express
1. `cd express`
2. `npm install express --save`
3. `npm install oracle-nosqldb --save`
4. `export COMPARTMENT=<Your Compartment OCID>`
5. `node app.js`
6. open another terminal
7. API to get ddl  
   `curl -X GET localhost:3000/api/<your table name>/ddl`
8. API to get row by PK  
   `curl -X GET localhost:3000/api/<your table name>/id/<primary key>`