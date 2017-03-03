var exec = require("child_process").exec;
var querystring = require("querystring"), fs = require("fs"), formidable = require("formidable"), mv =require("mv");
var s3 = require('s3');


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
        console.log(fields)

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

    res.writeHead( 200, {"Content-Type": "image/jpg"} );
    var file = req.params["fileId"] 
    var fileToDownload;
    console.log(req.query)
    
    switch(file) {
        case "uca.jpg":
            fileToDownload = "tmp/uca.jpg";
            break;
        case "olimpia.jpg":
            fileToDownload = "tmp/olimpia.jpg";
            break;
        default:
            fileToDownload = "tmp/file";
    }

    fs.createReadStream(fileToDownload).pipe(res);
    res.end();
}


function dataGet(req, res){
    console.log("Request handler 'data' was called.");
    
    console.log(req.query);     
    var data = '{"0": "Universidad Católica", "1":   "Nuestra Señora de la Asunciónnn  ", "2": [1,2,3]}';

    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
    res.write(JSON.parse(JSON.stringify(data)));
    res.end();
}

function dataPost(req, res){
    console.log("Request handler 'data post' was called.");
    
    console.log(req.body);

    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var data = '{"0": "Universidad Católica", "1":   "Nuestra Señora de la Asunciónhh  ", "2": [1,2,3]}';

    res.write(JSON.parse(JSON.stringify(data)));
    res.end();
}

function dataPut(req, res){
    console.log("Request handler 'data put' was called.");
    
    console.log(req.body);
    console.log(req.query);
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var data = '{"0": "Universidad Católica", "1":   "Nuestra Señora de la Asunciónhh  ", "2": [1,2,3]}';

    res.write(JSON.parse(JSON.stringify(data)));
    res.end();
}

function dataDelete(req, res){
    console.log("Request handler 'data delete' was called.");
    
    console.log(req.query);

    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var data = '{"0": "Universidad Católica", "1":   "Nuestra Señora de la Asunciónhh  ", "2": [1,2,3]}';

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