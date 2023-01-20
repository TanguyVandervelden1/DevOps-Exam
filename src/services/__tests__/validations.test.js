const { isEmpty, is8Long, containsSpecialChar, containsNuber } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

describe("validations tests suites - gamer tag 8 Long", () => {
    test("should retun true if more than 8 characters", () => {
        const result = is8Long("GameTagLong");
        expect(result).toBe(true);
    });

    test("should retun true if more than 8 characters", () => {
        const result = is8Long("Gamer");
        expect(result).toBe(false);
    });

    test("should retun false if no special character", () => {
        const result = is8Long("Gamer");
        expect(result).toBe(false);
    });
});

describe("validations tests suites - gamer tag special character", () => {
    test("should retun false if no special character", () => {
        const result = containsSpecialChar("Gamer");
        expect(result).toBe(false);
    });

    test("should retun true if special character", () => {
        const result = containsSpecialChar("Gamer?");
        expect(result).toBe(true);
    });
});

describe("validations tests suites - gamer tag number", () => {
    test("should retun false if no special character", () => {
        const result = containsNuber("Gamer");
        expect(result).toBe(false);
    });

    test("should retun true if special character", () => {
        const result = containsNuber("Gamer4");
        expect(result).toBe(true);
    });
});
// TODO: Create tests suite for validation function
