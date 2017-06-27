/**
 *	Routing file, matching path with request handlers
 */

var express = require("express");
var router = express.Router();
var requestHandlers = require("./requestHandlers");

router.route("/")
	.get(requestHandlers.start);



router.route("/currency/")

	.get(requestHandlers.currencyGet) 


router.route("/products/logos/:file")

	.get(requestHandlers.productsLogosLoadImage) 


router.route("/products/providers")

	.get(requestHandlers.productsProvidersGet) 


router.route("/products/")

	.get(requestHandlers.productsGet) 


router.route("/products/images/:file")

	.get(requestHandlers.productsImagesDownload) 

	.post(requestHandlers.productsImagesUpload)


router.route("/purchases/")

	.delete(requestHandlers.purchasesDelete) 

	.get(requestHandlers.purchasesGet) 

	.post(requestHandlers.purchasesPost) 

	.put(requestHandlers.purchasesPut) 


router.route("/user/")

	.get(requestHandlers.userGet) 

	.put(requestHandlers.userPut) 

	

module.exports = router;
