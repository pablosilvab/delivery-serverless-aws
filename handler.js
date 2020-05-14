"use strict";

const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");

const orderManager = require("./orderManager");

var sqs = new AWS.SQS({ region: process.env.REGION });
const QUEUE_URL = process.env.PENDING_ORDERS_QUEUE;

module.exports.makeOrder = (event, context, callback) => {
  console.log("makeOrder function called");

  // TODO: validate request
  let body = JSON.parse(event.body);

  const orderId = uuidv4();

  const params = {
    MessageBody: JSON.stringify({
      orderId: orderId,
      name: body.name,
      address: body.address,
      pizzas: body.pizzas,
    }),
    QueueUrl: QUEUE_URL,
  };

  sqs.sendMessage(params, function (err, data) {
    console.log(data);
    if (err) {
      sendResponse(500, err, callback);
    } else {
      const message = {
        orderId: orderId,
        messageId: data.MessageId,
      };
      sendResponse(200, message, callback);
    }
  });
};

module.exports.prepareOrder = (event, context, callback) => {
  console.log("prepareOrder function called");

  const order = JSON.parse(event.Records[0].body);
  orderManager
	.saveCompleted
	Order(order)
    .then((data) => {
      callback();
    })
    .catch((error) => {
      callback(error);
    });
};

function sendResponse(statusCode, message, callback) {
  const response = {
    statusCode: statusCode,
    body: JSON.stringify(message),
  };
  callback(null, response);
}
