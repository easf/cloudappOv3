var exec = require("child_process").exec;
var querystring = require("querystring"), fs = require("fs"), formidable = require("formidable"), mv =require("mv");

function start ( req, res ) {
    console.log ( "Request handler 'start' was called." );    
    var body = '<html>'+
     '<head>'+
     '<meta http-equiv="Content-Type" content="text/html; '+
     'charset=UTF-8" />'+
     '</head>'+
     '<body>'+
     '<form action="/upload" enctype="multipart/form-data"' +
     'method="post">'+
     '<input type="file" name="upload" multiple="multiple">'+
     '<input type="submit" value="Upload file" />'+
     '</form>'+
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
    form.parse( req, function( error, fields, files ) {
        console.log("parsing done");
        mv(files.upload.path, "tmp/uca.png", function(error){
            if(error){
                fs.unlink("tmp/uca.png");
                mv(files.upload.path, "tmp/uca.png");
            }
        });

        res.writeHead( 200 );
        //res.write("received image:<br/>");
        //res.write("<img src='/show' />");
        res.end();

    })
}

function show(  req, res  ) {
    console.log( "Request handler 'show' was called." );
    res.writeHead( 200, {"Content-Type": "image/jpg"} );
    fs.createReadStream("tmp/uca.jpg").pipe(res);
}

exports.start = start;
exports.upload = upload;
exports.show = show;