const twikoo = require('twikoo-netlify');

exports.handler = async (event, context) => {

  // ===== 处理 OPTIONS（预检请求）=====
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://shaobufan.github.io",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: ""
    };
  }

  // ===== 正常请求 =====
  const res = await twikoo.handler(event, context);

  return {
    ...res,
    headers: {
      ...(res.headers || {}),
      "Access-Control-Allow-Origin": "https://shaobufan.github.io",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
    }
  };
};
