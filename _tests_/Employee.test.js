const Employee = require("../lib/Employee");
test("Can create Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});


test("Can set name via constructor arguments", () => {
  const name = "Bob";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});


test("Can create id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Bob", testValue);
  expect(e.id).toBe(testValue);
});


test("Can create email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Bob", 1, testValue);
  expect(e.email).toBe(testValue);
});


test("Can create name via getName()", () => {
  const testValue = "Bob";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can create id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Bob", testValue);
  expect(e.getId()).toBe(testValue);
});


test("Can create email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Bob", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});


test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Bob", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
