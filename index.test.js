const tape = require("tape");

const { test } = require(".");


it("passes with empty tests", function (t) {
	const mockConsole = logger();
	test("name", function() {}, mockConsole);

	t.equal(mockConsole.logs[0], "PASSED: name");
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
