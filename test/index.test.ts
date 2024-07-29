import { expect, test } from "vitest";
import clamp from "../src/index";

test("Value below minimum boundary", () => {
	expect(clamp(1, 5, 10)).toBe(5);
	expect(clamp(-10, 0, 5)).toBe(0);
	expect(clamp(0, 2, 8)).toBe(2);
	expect(clamp(3, 6, 15)).toBe(6);
});

test("Value within range", () => {
	expect(clamp(5, 1, 10)).toBe(5);
	expect(clamp(7, 5, 10)).toBe(7);
	expect(clamp(3, 2, 8)).toBe(3);
	expect(clamp(12, 10, 15)).toBe(12);
});

test("Value above maximum boundary", () => {
	expect(clamp(20, 1, 10)).toBe(10);
	expect(clamp(12, 5, 10)).toBe(10);
	expect(clamp(9, 0, 5)).toBe(5);
	expect(clamp(18, 8, 15)).toBe(15);
});

test("Value on minimum boundary", () => {
	expect(clamp(1, 1, 10)).toBe(1);
	expect(clamp(5, 5, 10)).toBe(5);
	expect(clamp(2, 2, 8)).toBe(2);
	expect(clamp(10, 10, 15)).toBe(10);
});
