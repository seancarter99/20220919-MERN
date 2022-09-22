// This entire file is a "test suite"
// Test Suites are typically geared towards one class or function



// Compartmentalize your tests based off some category using describe()

describe('Addition', () => {
    // Jest will know what test is at runtime
    test('Hello Test!', () => {
        // Expect takes a value and compares it with another
        // ===
        expect(2 + 2).toBe(4); // Expect 2 + 2 to be 4
    });

    // It does the same thing
    it('should correctly calculate 2 + 3 to be 5', () => {
        expect(2 + 3).toBe(5);
    });
});

describe('Subtraction', () => {
    test('10 / 1 is 10', () => {
        expect(10 / 1).toBe(10);
    });
});