var exec = require("child_process").exec;
var querystring = require("querystring"), fs = require("fs"), formidable = require("formidable"), mv =require("mv");
var s3 = require('s3');
const path = require('path');

var RESPONSE_LENGTH = 5;
var APP_NAME = "ShoppingCart ";
var ROW_INFO = "row: " ;

function start ( req, res ) {
    console.log ( "Request handler 'start' was called." );    
    var body = '<html>'+
     '<head>'+
     '<meta http-equiv="Content-Type" content="text/html; '+
     'charset=UTF-8" />'+
     '</head>'+
     '<body>'+
     '<h1>MDD+ Mobile Cloud Server</h1>'+
     '<h2>Welcome!</h2>' +
     '<h3>You can interchange data with this server from MDD+ mobile applications: iOS and Android</h3>'+
     '<h3>DEI 2017, All Rights Reserved</h3>' +
     '</body>'+
     '</html>';
    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.write(body);
    res.end();        
}

exports.start = start;


function getContentType (extension) {
	switch(extension) {
			case "pdf":
				return {"Content-Type": "application/pdf"};		
		
			case "doc":
				return {"Content-Type": "application/msword"};		
		
			case "odt":	
				return {"Content-Type": "application/vnd.oasis.opendocument.text"};
		
			case "xls":
				return {"Content-Type": "application/vnd.ms-excel"};
	
			case "ods":
				return {"Content-Type": "application/vnd.oasis.opendocument.spreadsheet"};
				
			case "jpg":
				return {"Content-Type": "image/jpg"};
				
			case "png":
				return {"Content-Type": "image/png"};
				
			case "gif":
				return {"Content-Type": "image/gif"};
	
			case "bmp":
				return {"Content-Type": "image/bmp"};
				
			case "aac":
				return {"Content-Type": "audio/aac"};
				
			case "midi":
				return {"Content-Type": "audio/midi"};
				
			case "x-wav":
				return {"Content-Type": "audio/x-wav"};
	
			case "3gpp":
				return {"Content-Type": "audio/3gpp"};
				
			case "mpeg":
				return {"Content-Type": "audio/mpeg"};
				
			case "avi":
				return {"Content-Type": "video/avi"};
				
			case "flv":
				return {"Content-Type": "video/x-flv"};
				
			case "m3u8":
				return {"Content-Type": "application/x-mpegURL"};
				
			case "ts":
				return {"Content-Type": "video/MP2T"};
				
			case "3gp":
				return {"Content-Type": "video/3gpp"};
				
			case "mov":
				return {"Content-Type": "video/quicktime"};
			case "wmv":
				return {"Content-Type": "video/x-ms-wmv"};
				
			case "mp4":
				return {"Content-Type": "video/mp4"};
				
			case "txt":
				return {"Content-Type": "text/plain"};
				
			case "csv":
				return {"Content-Type": "text/csv"};
				
			case "rtf":
				return {"Content-Type": "application/rtf"};
							  				  				  				  	
			default:
	        	return {"Content-Type": "application/octet-stream"};
	        	
	}
}



function customerPost (req, res){
    console.log("Request handler 'data customerPost' was called.");
    console.log(req.query);  // to print call parameters   
    
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var data = {};


    data [ "info" ]  = "Post call handled by customerPost, Openshift cloud";
    for (var i = RESPONSE_LENGTH - 1; i >= 0; i--) {
      data [ "id" + i.toString() ] = APP_NAME +  ROW_INFO + i.toString();
    }
    data["by"] = ["MDDPlus", "DEI-UC", "2017"];
    

    res.write(JSON.stringify(data));
    res.end();
}

exports.customerPost = customerPost;


function customerDelete (req, res){
    console.log("Request handler 'data customerDelete' was called.");
    console.log(req.query);  // to print call parameters   
    
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var data = {};


    data [ "info" ]  = "Delete call handled by customerDelete, Openshift cloud";
    for (var i = RESPONSE_LENGTH - 1; i >= 0; i--) {
      data [ "id" + i.toString() ] = APP_NAME +  ROW_INFO + i.toString();
    }
    data["by"] = ["MDDPlus", "DEI-UC", "2017"];
    

    res.write(JSON.stringify(data));
    res.end();
}

exports.customerDelete = customerDelete;


function customerGet (req, res){
    console.log("Request handler 'data customerGet' was called.");
    console.log(req.query);  // to print call parameters   
    
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var data = {};


	data[ "responseRequested" ] = "name : ListOfName email : ListOfEmail phone : ListOfPhone ";			 

    data [ "info" ]  = "Get call handled by customerGet, Openshift cloud";
    for (var i = RESPONSE_LENGTH - 1; i >= 0; i--) {
      data [ "id" + i.toString() ] = APP_NAME +  ROW_INFO + i.toString();
    }
    data["by"] = ["MDDPlus", "DEI-UC", "2017"];
    

    res.write(JSON.stringify(data));
    res.end();
}

exports.customerGet = customerGet;


function customerPut (req, res){
    console.log("Request handler 'data customerPut' was called.");
    console.log(req.query);  // to print call parameters   
    
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var data = {};


    data [ "info" ]  = "Put call handled by customerPut, Openshift cloud";
    for (var i = RESPONSE_LENGTH - 1; i >= 0; i--) {
      data [ "id" + i.toString() ] = APP_NAME +  ROW_INFO + i.toString();
    }
    data["by"] = ["MDDPlus", "DEI-UC", "2017"];
    

    res.write(JSON.stringify(data));
    res.end();
}

exports.customerPut = customerPut;


function customerPurchasesGet (req, res){
    console.log("Request handler 'data customerPurchasesGet' was called.");
    console.log(req.query);  // to print call parameters   
    
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var data = {};


	data[ "responseRequested" ] = "id : ListOfId ordered : ListOfOrdered total : ListOfTotal quantity : ListOfQuantity price : ListOfPrice idAccount : ListOfIdAccount ";			 

    data [ "info" ]  = "Get call handled by customerPurchasesGet, Openshift cloud";
    for (var i = RESPONSE_LENGTH - 1; i >= 0; i--) {
      data [ "id" + i.toString() ] = APP_NAME +  ROW_INFO + i.toString();
    }
    data["by"] = ["MDDPlus", "DEI-UC", "2017"];
    

    res.write(JSON.stringify(data));
    res.end();
}

exports.customerPurchasesGet = customerPurchasesGet;


function customerPurchasesPost (req, res){
    console.log("Request handler 'data customerPurchasesPost' was called.");
    console.log(req.query);  // to print call parameters   
    
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var data = {};


    data [ "info" ]  = "Post call handled by customerPurchasesPost, Openshift cloud";
    for (var i = RESPONSE_LENGTH - 1; i >= 0; i--) {
      data [ "id" + i.toString() ] = APP_NAME +  ROW_INFO + i.toString();
    }
    data["by"] = ["MDDPlus", "DEI-UC", "2017"];
    

    res.write(JSON.stringify(data));
    res.end();
}

exports.customerPurchasesPost = customerPurchasesPost;



function productsProviderlogosLoadImage(  req, res  ) {
    console.log( "Request handler 'productsProviderlogosLoadImage' was called." );
    console.log(req.query); // to print call parameters 
    
    var file = req.params[ "file" ];
    var fileSplit = file.split(".");
    var extension = fileSplit.pop();
 	var fileToDownload = "tmp/" + file;
	var contentType = getContentType (extension);
	

    var fileAbs = __dirname + "/" + fileToDownload;
    //res.download(file); // Set disposition and send it.
    //res.writeHead( 200, contentType );
    res.download(fileAbs, file, function(err){
    if (err) {
        console.log("Download error!");
    } else {
        console.log("Download success!");
    }
    });
    //fs.createReadStream(fileToDownload).pipe(res);
    //res.end();
}

exports.productsProviderlogosLoadImage = productsProviderlogosLoadImage;




function productsCurrencyGet (req, res){
    console.log("Request handler 'data productsCurrencyGet' was called.");
    console.log(req.query);  // to print call parameters   
    
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var data = {};


    data [ "info" ]  = "Get call handled by productsCurrencyGet, Openshift cloud";
    for (var i = RESPONSE_LENGTH - 1; i >= 0; i--) {
      data [ "id" + i.toString() ] = APP_NAME +  ROW_INFO + i.toString();
    }
    data["by"] = ["MDDPlus", "DEI-UC", "2017"];
    

    res.write(JSON.stringify(data));
    res.end();
}

exports.productsCurrencyGet = productsCurrencyGet;



function productsImagesDownload(  req, res  ) {
    console.log( "Request handler 'productsImagesDownload' was called." );
    console.log(req.query); // to print call parameters 
    
    var file = req.params[ "file" ];
    var fileSplit = file.split(".");
    var extension = fileSplit.pop();
 	var fileToDownload = "tmp/" + file;
	var contentType = getContentType (extension);
	

    var fileAbs = __dirname + "/" + fileToDownload;
    //res.download(file); // Set disposition and send it.
    //res.writeHead( 200, contentType );
    res.download(fileAbs, file, function(err){
    if (err) {
        console.log("Download error!");
    } else {
        console.log("Download success!");
    }
    });
    //fs.createReadStream(fileToDownload).pipe(res);
    //res.end();
}

exports.productsImagesDownload = productsImagesDownload;





function productsImagesUpload(  req, res  ) {
    console.log ( "Request handler 'productsImagesUpload' was called." );
    
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    
    form.parse( req, function( error, fields, files ) {
        console.log("parsing done");
        console.log (fields); // to print call parameters 
        
        localPath = "tmp/" + fields.filename;
        mv(files.upload.path, localPath, function(error){
            if(error){
                fs.unlink(localPath);
                mv(files.upload.path, localPath);
            }
        });

        res.writeHead( 200 );
        res.end();

    });
}

exports.productsImagesUpload = productsImagesUpload;


function productsGet (req, res){
    console.log("Request handler 'data productsGet' was called.");
    console.log(req.query);  // to print call parameters   
    
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var data = {};


	data[ "responseRequested" ] = "idProduct : ListOfIdProduct idProvider : ListOfIdProvider idNameProduct : ListOfIdNameProduct idNameProvider : ListOfIdNameProvider ";			 

    data [ "info" ]  = "Get call handled by productsGet, Openshift cloud";
    for (var i = RESPONSE_LENGTH - 1; i >= 0; i--) {
      data [ "id" + i.toString() ] = APP_NAME +  ROW_INFO + i.toString();
    }
    data["by"] = ["MDDPlus", "DEI-UC", "2017"];
    

    res.write(JSON.stringify(data));
    res.end();
}

exports.productsGet = productsGet;



function productsTechnicalsheetsDownload(  req, res  ) {
    console.log( "Request handler 'productsTechnicalsheetsDownload' was called." );
    console.log(req.query); // to print call parameters 
    
    var file = req.params[ "file" ];
    var fileSplit = file.split(".");
    var extension = fileSplit.pop();
 	var fileToDownload = "tmp/" + file;
	var contentType = getContentType (extension);
	

    var fileAbs = __dirname + "/" + fileToDownload;
    //res.download(file); // Set disposition and send it.
    //res.writeHead( 200, contentType );
    res.download(fileAbs, file, function(err){
    if (err) {
        console.log("Download error!");
    } else {
        console.log("Download success!");
    }
    });
    //fs.createReadStream(fileToDownload).pipe(res);
    //res.end();
}

exports.productsTechnicalsheetsDownload = productsTechnicalsheetsDownload;



