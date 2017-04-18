var passwordHash = require('password-hash');

module.exports = function(Farmpersonal) {

	Farmpersonal.farmerRegistration = function(data, cb) {        
		var response = {};
		var hashedPassword = passwordHash.generate(data.password);
		data.password=hashedPassword;
        Farmpersonal.find({
            where:{
                or:[{ email:data.email},{username:data.username}]               
            }
        },function(err,registerInfo){       
            if(err){
                console.log("err", err)
                cb(err,"sorry something wrong");
            }else{
                if(typeof registerInfo !== 'undefined' && registerInfo.length > 0){
                    console.log("krishna");
                    response.data=registerInfo;
                    response.status='username or email already exist';
                    response.statusCode=200;
                    cb(null,response)
                }else{                     
                     Farmpersonal.create(data,function(err,model){
                        if(err){
                            console.log("err", err)
                            cb(err,"sorry something wrong");
                        }else{                           
                            response.data=model;
                            response.statusCode=200;
                            cb(null,response)
                       } 
                    });     
                }
            }
        });         
     };


	 Farmpersonal.remoteMethod('farmerRegistration', {
    	accepts: {
    		arg: 'data', 
    		type: 'json',
    		http:{source:'body'}
    	},
        http: {
        	path: '/farmer-registration', 
        	verb: 'post'
        },
        returns: {
        	arg: 'data',
        	type: '[json]',
        	root:'true' 
        }
    });


   Farmpersonal.farmerLogin= function(username,password,cb) {
        var  response = {};
        var hashedPassword = passwordHash.generate(password); 

        Farmpersonal.find({
            where:{
               username:username             
            }
        },function(err,loginInfo){
            if(err){
               cb(err,"sorry something wrong");
            }else{
                if(typeof loginInfo !== 'undefined' && loginInfo.length > 0){
                    var validPassword = passwordHash.verify(password,loginInfo[0].password);
                    if(validPassword){
                        response.data = loginInfo;
                        response.status = 'login Successfully';
                        response.statusCode=200;
                        cb(null,response)
                    }else{
                        response.status = 'Invalid password';
                        response.statusCode=400;
                        cb(null,response) 
                    }    
                }else{
                    response.status = 'Invalid username';
                    response.statusCode=400;
                    cb(null,response)   
                }
            }
        });          
   }


   Farmpersonal.remoteMethod('farmerLogin', {
        accepts:[{
            arg: 'username', 
            type: 'string'
        },{
            arg: 'password', 
            type: 'string'
        }],
        http: {
            path: '/farmer-login', 
            verb: 'get'
        },
        returns: {
            arg: 'data',
            type: '[json]',
            root:'true' 
        }
    });

   



};


