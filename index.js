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
	if (Array.isArray(actual) && Array.isArray(expected)) {
		try {
			actual.forEach((value, index) => {
				assertEqual(value, expected[index]);
			});
		} catch (e) {
			throwUnequal(actual, expected);
		}
	} else if (actual !== expected) {
		throwUnequal(actual, expected);
	}
}

function throwUnequal(actual, expected) {
	throw new Error("expected " + JSON.stringify(actual) + " to equal " + JSON.stringify(expected));
}

module.exports = { assertEqual, test };
