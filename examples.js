test("this should pass", function () {
	assertEqual(123, 123);
});

test.skip("this should be skipped", function () {});

test("this should fail", function () {
	assertEqual([123, "foo"], [234, "bar"]);
});
