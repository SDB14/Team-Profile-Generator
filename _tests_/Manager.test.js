const Manager = require("../lib/Manager");

test("Can create office number with constructor", () => {
  const testValue = "OfficeNumber";
  const e = new Manager("Bob", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Bob", 1, "test@test.com", "OfficeNumber");
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number()", () => {
  const testValue = "OfficeNumber";
  const e = new Manager("Bob", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});