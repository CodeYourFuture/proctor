test("this should pass", function () {
	assertEqual(123, 123);
});

xtest("this should be skipped", function () {
	assertEqual("foo", "bar");
});

test("this should fail", function () {
	assertEqual([123, "foo"], [234, "bar"]);
});
