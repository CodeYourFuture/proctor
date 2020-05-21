const tape = require("tape");

const { test } = require(".");

it("logs a pass with an empty test", function (t) {
	const mockConsole = logger();
	test("name", function() {}, mockConsole);

	t.equal(mockConsole.logs[0], "PASSED: name");
});

it("logs a failure on error", function (t) {
	const mockConsole = logger();
	test("name", function () {
		throw new Error("whoops");
	}, mockConsole);

	t.equal(mockConsole.logs[0], "FAILED: name");
});

it("logs the message on error", function (t) {
	const mockConsole = logger();
	const content = "whoops";
	test("name", function () {
		throw new Error(content);
	}, mockConsole);

	t.equal(mockConsole.logs[1], ` - ${content}`);
});

function logger() {
	return {
		logs: [],
		log(message) {
			this.logs.push(message);
		},
	};
}

function it(name, callback) {
	tape(name, function (t) {
		callback(t);
		t.end();
	});
}
