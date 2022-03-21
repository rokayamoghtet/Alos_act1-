'use strict';
var HttpAction = require('paymentwall/lib/HttpAction'),
    util = require('util'),
    querystring = require('querystring'),
    ApiObject = require('paymentwall/lib/ApiObject'),
    Paymentwall = require('paymentwall');

Paymentwall.Configure(
    Paymentwall.Base.API_GOODS,
    'YOUR_PROJECT_KEY ',
    'YOUR_SECRET_KEY '
);

var api = new ApiObject();
api.createDeliveryRequest = function() {
    var url = this.BRICK_BASE_URL;
    var method = 'POST';
    var post_options = this.createPostOptions(url, '/api/delivery', method);
    return post_options;
};

var post_options = api.createDeliveryRequest();

var post_data = {
    "payment_id" : "b63400368",
    "merchant_reference_id" : "order_12345",
    "type" : "digital",
    "status" : "delivered",
    "estimated_delivery_datetime" : "2018/08/23 15:00:00 +0300",
    "estimated_update_datetime" : "2018/08/23 11:00:00 +0300",
    "refundable" : true,
    "details" : "Item will be delivered via email by 3PM on 2018/08/23",
    "shipping_address[email]" : "user@hostname.com",
    "reason" : "none",
    "attachments" : {}
};

post_data = querystring.stringify(post_data);

HttpAction.runAction(post_options, post_data, true, function(response) {
    response = response.JSON_chunk;
    if(response.success) {
        // delivery status is successfully saved
    } else if(response.error) {
        console.log(response.error);
        console.log(response.notices);
    }
});
