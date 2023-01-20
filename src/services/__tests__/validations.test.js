const { isEmpty, is8Long } = require("../validations");

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

describe("validations tests suites - gamer tag", () => {
    test("should retun true if more than 8 characters", () => {
        const  result = is8Long("GameTagLong");
        expect(result).toBe(true);
    });

    test("should retun true if more than 8 characters", () => {
        const  result = is8Long("Gamer");
        expect(result).toBe(false);
    });

    
});
// TODO: Create tests suite for validation function
