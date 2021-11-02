const Engineer = require("../lib/Engineer");

test("Can create github with constructor", () => {
  const testValue = "GitHub";
  const e = new Engineer("Bob", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Bob", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHub";
  const e = new Engineer("Bob", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});