const handler = require("serve-handler");
const http = require("http");

const port = parseInt(process.env.PORT || "5000", 10);

const server = http.createServer((request, response) => {
	return handler(request, response, {
		rewrites: [
			{ "source": "/proctor/:file", "destination": "/:file" },
		],
	});
});

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`);
});
