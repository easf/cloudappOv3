var exec = require("child_process").exec;
var querystring = require("querystring"), fs = require("fs"), formidable = require("formidable"), mv =require("mv");
var s3 = require('s3');

var RESPONSE_LENGTH = 10;
var APP_NAME = "Generic ";
var ROW_INFO = "row: "

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

function upload(  req, res  ) {
    console.log ( "Request handler 'upload' was called." );
    

    var form = new formidable.IncomingForm();
    console.log("about to parse");
    var file = req.params["fileId"];
    
    form.parse( req, function( error, fields, files ) {
        console.log("parsing done");
        console.log (fields); // to print call parameters 
        var newPath;
        
        switch(file) {
            case "uca.jpg":
                newPath = "tmp/uca.jpg";
                break;
            case "olimpia.jpg":
                newPath = "tmp/olimpia.jpg";
                break;
            case "file.pdf":
                newPath = "tmp/file.pdf";
                break;
            default:
                newPath = "tmp/file";
        }
        
        mv(files.upload.path, newPath, function(error){
            if(error){
                fs.unlink(newLocation);
                mv(files.upload.path, newLocation);
            }
        });

        res.writeHead( 200 );
        res.end();

    });
}

function download(  req, res  ) {
    console.log( "Request handler 'download' was called." );
    console.log(req.query); // to print call parameters 
    
    var file = req.params["fileId"];
    var fileToDownload = "tmp/uca.jpg";
    var contentType = {"Content-Type": "image/jpg"};
    
    switch(file) {
        case "uca.jpg":
            fileToDownload = "tmp/uca.jpg";
            contentType = {"Content-Type": "image/jpg"};
            break;
        case "olimpia.jpg":
            fileToDownload = "tmp/olimpia.jpg";
            contentType = {"Content-Type": "image/jpg"};
            break;
        default:
            fileToDownload = "tmp/file";
            contentType = {"Content-Type": "image/plain"};
            break;
    }
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


function dataGet(req, res){
    console.log("Request handler 'data get' was called.");
    console.log(req.query);  // to print call parameters   
    
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var data = {}
    data["info"] = "Get call, Beanstalk AWS Cloud";
    //'{"info": "data get" , "0": "MDDPlus Mobile Cloud", "1": "DEI - UC - 2017", "2": ["79","90","02"]}';
    for (var i = RESPONSE_LENGTH - 1; i >= 0; i--) {
      data[ "id" + i.toString() ] = APP_NAME +  ROW_INFO + i.toString();
    }
    data["from"] = ["MDDPlus", "SE", "IF", "DEI", "UC", "2017"]
    res.write(JSON.parse(JSON.stringify(data)));
    res.end();
}

function dataPost(req, res){
    console.log("Request handler 'data post' was called.");
    console.log(req.body); // to print call parameters

    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var data = {};
    data["info"] = "Post call, Beanstalk AWS Cloud";
    //'{"info": "data post" , "0": "MDDPlus Mobile Cloud", "1":   "DEI - UC - 2017", "2": ["79","90","02"]}';
    for (var i = RESPONSE_LENGTH - 1; i >= 0; i--) {
      data[ "id" + i.toString() ] = APP_NAME +  ROW_INFO + i.toString();
    }
    data["by"] = ["MDDPlus", "SE", "IF", "DEI", "UC", "2017"]
    res.write(JSON.parse(JSON.stringify(data)));
    res.end();
}

function dataPut(req, res){
    console.log("Request handler 'data put' was called.");
    console.log(req.body); // to print call parameters
    
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var data = {};
    data["info"] = "Put call, Beanstalk AWS Cloud";
    //'{"info": "data put" , "0": "MDDPlus Mobile Cloud", "1":   "DEI - UC - 2017", "2": ["79","90","02"]}';
    for (var i = RESPONSE_LENGTH - 1; i >= 0; i--) {
      data[ "id" + i.toString() ] = APP_NAME +  ROW_INFO + i.toString();
    }
    data["by"] = ["MDDPlus", "SE", "IF", "DEI", "UC", "2017"]

    res.write(JSON.parse(JSON.stringify(data)));
    res.end();
}

function dataDelete(req, res){
    console.log("Request handler 'data delete' was called.");
    console.log(req.query); // to print call parameters

    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var data = {};
    data["info"] = "Put call, Beanstalk AWS Cloud";
    //'{"info": "data delete" , "0": "MDDPlus Mobile Cloud", "1":   "DEI - UC - 2017", "2": ["79","90","02"]}';
    for (var i = RESPONSE_LENGTH - 1; i >= 0; i--) {
      data[ "id" + i.toString() ] = APP_NAME +  ROW_INFO + i.toString();
    }
    data["by"] = ["MDDPlus", "SE", "IF", "DEI", "UC", "2017"]

    res.write(JSON.parse(JSON.stringify(data)));
    res.end();
}

exports.start = start;
exports.upload = upload;
exports.download = download;
exports.dataGet = dataGet;
exports.dataPost = dataPost;
exports.dataPut = dataPut;
exports.dataDelete = dataDelete;