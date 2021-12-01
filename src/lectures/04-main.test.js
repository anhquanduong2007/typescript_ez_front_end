"use strict";
exports.__esModule = true;
var _04_main_1 = require("./04-main");
describe('isPositive()', function () {
    it("Should return true when n > 0", function () {
        expect((0, _04_main_1.isPositive)(1)).toBe(true);
        expect((0, _04_main_1.isPositive)(2)).toBe(true);
        expect((0, _04_main_1.isPositive)(3)).toBe(true);
    });
    it("Should return false when n < 0", function () {
        expect((0, _04_main_1.isPositive)(-1)).toBe(false);
    });
    it("Should return false when n = 0", function () {
        expect((0, _04_main_1.isPositive)(0)).toBe(false);
    });
});
