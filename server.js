// const http = require("http");
const httpProxy = require("http-proxy");
const port = process.env.PORT || 3000;

//
// Create your proxy server and set the target in the options.
//
httpProxy
  .createProxyServer({
    target: "http://www.moyeomoyeo-api.com:8085",
    changeOrigin: true,
  })
  .listen(port, () => {
    console.log(`proxy server running on port ${port}`);
  });
