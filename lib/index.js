/**
 * Lib
 */

// Single - All
module.exports.singleAll = (event, callback) => {
  return callback(null, {
    body: JSON.stringify(event, null, 2)
  });
};

// Multi - Create
module.exports.multiCreate = (event, callback) => {
  return callback(null, {
    body: JSON.stringify(event, null, 2)
  });
};

// Multi - Show
module.exports.multiShow = (event, callback) => {
  return callback(null, {
    body: JSON.stringify(event, null, 2)
  });
};

// AWS Lambda Proxy Response
module.exports.lambdaProxyResponse = (code, body) => {
  const response = {
    statusCode: code,
    body: JSON.stringify(body),
  };

  return response;
};
