// Code below this line is boilerplate for testing
// See: https://github.com/CodeYourFuture/proctor

function test(name, body, output = console) {
	try {
		body();
		output.log("\n ✔ PASSED: " + name);
	} catch (e) {
		output.log("\n ✘ FAILED: " + name);
		output.log("   - " + e.message);
	}
}

test.skip = function (name, _, output = console) {
	output.log("\n ○ SKIPPED: " + name);
};

function assertEqual(actual, expected) {
	if (Array.isArray(actual) && Array.isArray(expected)) {
		try {
			const maxLength = Math.max(actual.length, expected.length);
			for (let index = 0; index < maxLength; index++) {
				assertEqual(actual[index], expected[index]);
			}
		} catch (e) {
			throwUnequal(actual, expected);
		}
	} else if (actual !== expected) {
		throwUnequal(actual, expected);
	}
}

function throwUnequal(actual, expected) {
	throw new Error(
		`expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}`
	);
}
