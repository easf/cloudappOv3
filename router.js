/**
 *	Routing file, matching path with request handlers
 */

var express = require("express");
var router = express.Router();
var requestHandlers = require("./requestHandlers");

router.route("/")
	.get(requestHandlers.start);



router.route("/customer/")

	.post(requestHandlers.customerPost) 

	.delete(requestHandlers.customerDelete) 

	.get(requestHandlers.customerGet) 

	.put(requestHandlers.customerPut) 


router.route("/customerpurchases")

	.get(requestHandlers.customerPurchasesGet) 

	.post(requestHandlers.customerPurchasesPost) 


router.route("/products/providerlogos/:file")

	.get(requestHandlers.productsProviderlogosLoadImage) 


router.route("/products/currency")

	.get(requestHandlers.productsCurrencyGet) 


router.route("/products/images/:file")

	.get(requestHandlers.productsImagesDownload) 

	.post(requestHandlers.productsImagesUpload)


router.route("/products/")

	.get(requestHandlers.productsGet) 


router.route("/products/technicalsheets/:file")

	.get(requestHandlers.productsTechnicalsheetsDownload) 

	

module.exports = router;
