'use strict';

module.exports = function(Cropplan) {
	
	Cropplan.deletePlan=function(landid,cb){

		var response={};
		console.log(landid)
			Cropplan.destroyAll({"landid":landid});
}

Cropplan.remoteMethod('deletePlan',{
	accepts:[{
		arg:'landid',
		type:'number'
	}],
	http: {
		path:'/delete-plan-for-land',
		verb:'get'
	},
	returns:{
		arg:'data',
		type:'[json]',
		root:'true'
	}
});

};
