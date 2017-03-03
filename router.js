/**
 *	Routing file, matching path with request handlers
 */

var express = require("express");
var router = express.Router();
var requestHandlers = require("./requestHandlers");


router.route("/")
  .get(requestHandlers.start);

router.get('/start', requestHandlers.start);

router.post('/upload/:fileId', requestHandlers.upload);

router.route('/download/:fileId')
  .get(requestHandlers.download)
 
  
router.route('/data')
	.get(requestHandlers.dataGet)
	.post(requestHandlers.dataPost)
	.put(requestHandlers.dataPut)
	.delete(requestHandlers.dataDelete);
	

module.exports = router;