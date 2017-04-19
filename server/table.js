var server = require('./server');
var ds = server.dataSources.farmercommunity;

var lbTables = ['farmersdetail','farmpersonal','state','district','village','landregistration','cropplan'];


ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name);
  ds.disconnect();
});