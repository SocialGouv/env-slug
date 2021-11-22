import { generate } from "../../src";

test("generate function on simple branch name", () => {
  const result = generate("my-awesome-branch-name");
  expect(result).toMatch("my-awesome-branch-name");
});

test("generate function on branch name not starting with a letter", () => {
  const prefix = "env-";
  const result = generate("/my-weird-branch-name");
  expect(result.slice(0, prefix.length)).toMatch(prefix);
});
