const { Client, ActivityType } = require('simple-discord-rpc');

console.log('=== Simple Discord RPC Package Test ===\n');

// Test 1: Client instantiation
console.log('Test 1: Creating Client instance...');
try {
  const client = new Client({ clientId: '123456789' });
  console.log('✓ Client created successfully\n');
} catch (err) {
  console.log('✗ Failed to create client:', err.message, '\n');
  process.exit(1);
}

// Test 2: ActivityType enum
console.log('Test 2: Checking ActivityType enum...');
const expectedTypes = {
  Playing: 0,
  Listening: 2,
  Watching: 3,
  Competing: 5
};

let allValid = true;
for (const [name, value] of Object.entries(expectedTypes)) {
  if (ActivityType[name] === value) {
    console.log(`  ✓ ActivityType.${name} = ${value}`);
  } else {
    console.log(`  ✗ ActivityType.${name} = ${ActivityType[name]} (expected ${value})`);
    allValid = false;
  }
}

if (allValid) {
  console.log('\n✓ All tests passed!');
} else {
  console.log('\n✗ Some tests failed');
  process.exit(1);
}
