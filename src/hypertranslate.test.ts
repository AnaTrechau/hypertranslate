import assert from "node:assert";
import { hypertranslate } from "./hypertranslate";
import { describe, it } from "node:test";
describe("hypertranslate", () => {
  it("Should hypertranslate stuff", async () => {
    const result = await hypertranslate("Discord", 20, "pt", "pt");
    console.log(` This is the result ${result}`);
    assert.equal(true, true);
  });
});
