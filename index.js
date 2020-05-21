// Code below this line is boilerplate for testing
// See: https://github.com/CodeYourFuture/proctor

function test(name, body, output = console) {
	try {
		body();
		output.log("PASSED: " + name);
	} catch (e) {
		output.log("FAILED: " + name);
		output.log(" - " + e.message);
	}
}

module.exports = { test };
