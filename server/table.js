var server = require('./server');
var ds = server.dataSources.farmingdatasource;
var lbTables = ['cropplan','query'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
  ds.disconnect();
});

