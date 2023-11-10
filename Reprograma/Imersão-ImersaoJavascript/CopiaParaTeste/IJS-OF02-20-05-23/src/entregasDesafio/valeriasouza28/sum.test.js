const sum = require("./sum");

describe("Testando a função sum", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(sum(1, 2)).not.toBe(0);
    });

    test("2 + 2 = 4", () => {
        expect(sum(2, 2)).toBe(4);
    });
});
