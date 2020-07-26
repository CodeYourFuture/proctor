# Proctor

A single-file test framework for Code Your Future exercises.

## What is this for?

As part of the Code Your Future course, there are a lot of exercises for the
students to complete. To encourage them to keep the code in a running state
(i.e. no syntax errors) and give clear feedback whether or not their code is
doing the right thing.

To reduce cognitive overload, so that we and the students don't have to think
about package installation or module systems, this is designed to be copied
into the exercise file and used in-place.

## How do I use it?

Copy-paste the content of `index.js` into your exercise file, and use the
`test` function to write checks for the exercises.

For example, running the following file with Node:

```javascript
test("this should pass", function () {
	assertEqual(123, 123);
});

test.skip("this should be skipped", function () {});

test("this should fail", function () {
	assertEqual([123, "foo"], [234, "bar"]);
});

// content of index.js here
```

would output:

```
 ✔ PASSED: this should pass

 ○ SKIPPED: this should be skipped

 ✘ FAILED: this should fail
   - expected [123,"foo"] to equal [234,"bar"]
```

## Local development

The following scripts are available for local development:

  - `npm run examples`: run the examples locally to see the output
  - `npm run lint`: run ESLint on all JavaScript files
  - `npm run test` (or `npm t`): run the tests in `index.test.js`
  - `npm run serve`: local server for reviewing the GitHub Pages site
