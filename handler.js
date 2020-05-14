"use strict";

const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");

const orderManager = require("./orderManager");

var sqs = new AWS.SQS({ region: process.env.REGION });
const QUEUE_URL = process.env.PENDING_ORDER_QUEUE;

module.exports.makeOrder = (event, context, callback) => {
  console.log("makeOrder function called");

  // TODO: validate request
  let body = JSON.parse(event.body);

  const order = {
    orderId: uuidv4(),
    name: body.name,
    address: body.address,
    pizzas: body.pizzas,
    timestamp: Date.now()
  };

  const params = {
    MessageBody: JSON.stringify(order),
    QueueUrl: QUEUE_URL
  };

  console.log(params);

  sqs.sendMessage(params, function (err, data) {
    if (err) {
      sendResponse(500, err, callback);
    } else {
      const message = {
        order: order,
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
    .saveCompletedOrder(order)
    .then((data) => {
      callback();
    })
    .catch((error) => {
      callback(error);
    });
};

module.exports.sendOrder = (event, context, callback) => {
  console.log("sendOrder function called");

  const record = event.Records[0];

  if (record.eventName === "INSERT") {

    console.log("deliver order");
    const orderId = record.dynamodb.Keys.orderId.S;

    orderManager
      .deliverOrder(orderId)
      .then((data) => {
        console.log(data);
        callback();
      })
      .catch((error) => {
        callback(error);
      });
  } else {
    console.log("is not a new record");
    callback();
  }

};

function sendResponse(statusCode, message, callback) {
  const response = {
    statusCode: statusCode,
    body: JSON.stringify(message),
  };
  callback(null, response);
}
