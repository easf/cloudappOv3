var exec = require("child_process").exec;
var querystring = require("querystring"), fs = require("fs"), formidable = require("formidable"), mv =require("mv");
var s3 = require('s3');



function getS3Client(){
    var client = s3.createClient({
      maxAsyncS3: 20,     // this is the default
      s3RetryCount: 3,    // this is the default
      s3RetryDelay: 1000, // this is the default
      multipartUploadThreshold: 20971520, // this is the default (20 MB)
      multipartUploadSize: 15728640, // this is the default (15 MB)
      s3Options: {
        accessKeyId: "AKIAISO4QZZKMLTQD4LQ",
        secretAccessKey: "pkfK9bygxYS9617K7hUhkrmkbbCafvfEF2Gh1B7I",
        region: "us-west-1",
        // endpoint: 's3.yourdomain.com',
        // sslEnabled: false
        // any other options are passed to new AWS.S3()
        // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
      },
    });
    return client;
}

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

function show(  req, res  ) {
    console.log( "Request handler 'show' was called." );

    res.writeHead( 200, {"Content-Type": "image/jpg"} );
    var file = req.params["fileId"] 
    var fileToDownload;
    console.log(req.body)
    
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


function data(req, res){
    console.log("Request handler 'data' was called.");
    
    console.log(req.query); 

    var data = '{"0": "Universidad Católica", "1":   "Nuestra Señora de la Asunciónhh  ", "2": [1,2,3]}';
    
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
    res.write(JSON.parse(JSON.stringify(data)));
    res.end();

}

function dataPost(req, res){
    console.log("Request handler 'data' was called.");
    
    console.log(req.body);

    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
    res.write(JSON.stringify('{"0":"Uiversidad Católica", "1":"Nuestra Señora de la Asunciónhh  "}'));
    res.end();

}

exports.start = start;
exports.upload = upload;
exports.show = show;
exports.data = data;
exports.dataPost = dataPost;
