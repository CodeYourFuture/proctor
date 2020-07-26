// Code below this line is boilerplate for testing
// See: https://github.com/CodeYourFuture/proctor

function test(name, body, output = console) {
	try {
		body();
		output.log("\n \033[32m✔\033[0m PASSED: " + name);
	} catch (e) {
		output.log("\n \033[31m✘\033[0m FAILED: " + name);
		output.log("   - " + e.message);
	}
}

function xtest(name, _, output = console) {
	output.log("\n \033[33m○\033[0m SKIPPED: \033[90m" + name + "\033[0m");
}

function assertEqual(actual, expected) {
	if (Array.isArray(actual) && Array.isArray(expected)) {
		if (actual.length !== expected.length) {
			throwUnequal(actual, expected);
		}
		try {
			for (let index = 0; index < actual.length; index++) {
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
