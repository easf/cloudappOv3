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
router.post('/show/:fileId', requestHandlers.show);

router.route('/data')
	.get(requestHandlers.data)
	.post(requestHandlers.dataPost);
	

module.exports = router;