const axios = require('/opt/node_modules/axios');

exports.lambdaHandler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'success',
    }),
  };
};
