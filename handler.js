'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports.makeOrder = async event => {
  const orderId = uuidv4(); 

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `El pedido fue registrado con el numero de orden: ${orderId}`
      },
      null,
      2
    ),
  };

};
