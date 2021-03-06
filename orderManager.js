"use strict";

const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.saveCompletedOrder = (order) => {
  console.log("Save order function called");

  order.deliveryStatus = "READY_FOR_DELIVERY";

  const params = {
    TableName: process.env.COMPLETED_ORDER_TABLE,
    Item: order,
  };

  return dynamo.put(params).promise();
};

module.exports.deliverOrder = (orderId) => {
  console.log("Deliver order function called");

  const params = {
    TableName: process.env.COMPLETED_ORDER_TABLE,
    Key: {
      orderId,
    },
    ConditionExpression: "attribute_exists(orderId)",
    UpdateExpression: "set deliveryStatus = :v",
    ExpressionAttributeValues: {
      ":v": "DELIVERED",
    },
    ReturnValues: "ALL_NEW",
  };

  return dynamo
    .update(params)
    .promise()
    .then((response) => {
      console.log("order delivered");
      return response.Attributes;
    });
};

module.exports.getStatusOrder = (orderId) => {
  console.log('Get status order function called');
  console.log('OrderId: ', orderId)

  var params = {
    TableName: process.env.COMPLETED_ORDER_TABLE,
    Key: {
      orderId,
    },
  };

  return dynamo.get(params).promise();

};
