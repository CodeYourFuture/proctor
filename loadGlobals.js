const fs = require("fs");

/**
 * Don't ever do this in real life!
 *
 * This hack is to expose selected names from index.js without having a
 * potentially-confusing module.exports line in there.
 */
const code = fs.readFileSync(__dirname + "/index.js", "utf8");
eval(code);

/* global assertEqual, test */
global.assertEqual = assertEqual;
global.test = test;

module.exports = { assertEqual, test };
