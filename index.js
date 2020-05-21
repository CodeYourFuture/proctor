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

function assertEqual(actual, expected) {
	if (actual !== expected) {
		throw new Error("expected " + actual + " to equal " + expected);
	}
}

module.exports = { assertEqual, test };
