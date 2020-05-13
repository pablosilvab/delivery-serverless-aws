'use strict';

const uuid = require('uuid/v1');

module.exports.makeOrder = async event => {
  const orderID = uuid();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'El pedido fue registrado con el numero de orden ${orderID}'
      },
      null,
      2
    ),
  };

};
