function add(a, b) {
  return a + b;
}

function test() {
  let passed = 0;
  let failed = 0;

  function assertEqual(actual, expected, name) {
    if (actual === expected) {
      console.log(`✓ ${name}`);
      passed++;
    } else {
      console.log(`✗ ${name} — expected ${expected}, got ${actual}`);
      failed++;
    }
  }

  // 5 tests
  assertEqual(add(1, 2), 3, "adds two positive numbers");
  assertEqual(add(-1, -2), -3, "adds two negative numbers");
  assertEqual(add(0, 0), 0, "adds zeros");
  assertEqual(add(-5, 5), 0, "adds opposite numbers");
  assertEqual(add(2.5, 1.5), 4, "adds decimals");

  console.log(`\n${passed} passed, ${failed} failed`);
  return failed === 0;
}

test();

// node 18,19,20
