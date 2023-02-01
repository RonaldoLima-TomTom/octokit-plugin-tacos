import { Octokit } from "@octokit/core";

import { tacos } from "../src";

describe("Smoke test", () => {
  it("{ tacos } export is a function", () => {
    expect(tacos).toBeInstanceOf(Function);
  });

  it("tacos.VERSION is set", () => {
    expect(tacos.VERSION).toEqual("0.0.0-development");
  });

  it("Loads plugin", () => {
    expect(() => {
      const TestOctokit = Octokit.plugin(tacos);
      new TestOctokit();
    }).not.toThrow();
  });
});
