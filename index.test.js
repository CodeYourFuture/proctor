const tape = require("tape");

const { assertEqual, test } = require("./loadGlobals");

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

it("compares numbers correctly", function (t) {
	const mockConsole = logger();
	test("name", function () {
		assertEqual(1, 2);
	}, mockConsole);

	t.equal(mockConsole.logs[0], "FAILED: name");
	t.equal(mockConsole.logs[1], " - expected 1 to equal 2");
});

it("compares strings correctly", function (t) {
	const mockConsole = logger();
	test("name", function () {
		assertEqual("foo", "bar");
	}, mockConsole);

	t.equal(mockConsole.logs[0], "FAILED: name");
	t.equal(mockConsole.logs[1], " - expected \"foo\" to equal \"bar\"");
});

it("compares equal arrays correctly", function (t) {
	const mockConsole = logger();
	test("name", function () {
		assertEqual(["foo"], ["foo"]);
	}, mockConsole);

	t.equal(mockConsole.logs[0], "PASSED: name");
});

it("reports unequal arrays correctly", function (t) {
	const mockConsole = logger();
	test("name", function () {
		assertEqual(["foo"], ["bar"]);
	}, mockConsole);

	t.equal(mockConsole.logs[0], "FAILED: name");
	t.equal(mockConsole.logs[1], " - expected [\"foo\"] to equal [\"bar\"]");
});

it("reports arrays of unequal length correctly", function (t) {
	const mockConsole = logger();
	test("name", function () {
		assertEqual(["foo"], ["foo", "bar"]);
	}, mockConsole);

	t.equal(mockConsole.logs[0], "FAILED: name");
	t.equal(mockConsole.logs[1], " - expected [\"foo\"] to equal [\"foo\",\"bar\"]");
});

it("allows tests to be skipped", function (t) {
	const mockConsole = logger();
	test.skip("name", function () {}, mockConsole);

	t.equal(mockConsole.logs[0], "SKIPPED: name");
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
