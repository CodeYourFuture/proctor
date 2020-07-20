test("this should pass", function () {
	assertEqual(123, 123);
});

test("this should fail", function () {
	assertEqual([123, "foo"], [234, "bar"]);
});
