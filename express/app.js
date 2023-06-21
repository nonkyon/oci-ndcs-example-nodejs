const express = require('express')
const app = express()
const port = 3000
const NoSQLClient = require('oracle-nosqldb').NoSQLClient;
const ServiceType = require('oracle-nosqldb').ServiceType;
const client = new NoSQLClient({
  serviceType: ServiceType.CLOUD,
  compartment: process.env.COMPARTMENT
});

app.get('/api/:table/ddl', async (req, res, next) => {
  try {
    const result = await client.getTable(req.params.table);
    const ddl = result.tableDDL;
    res.json(ddl);
  } catch (error) {
    next(error);
  }
});

app.get('/api/:table/id/:id', async (req, res, next) => {
  try {
    const result = await client.get(req.params.table, {id: req.params.id});
    const row = result.row;
    res.json(row);
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})