const { validateBrackets } = require("./index");

describe("validateBrackets", () => {
  it(" true for correct brackets", () => {
    expect(validateBrackets("{}")).toBe(true);
    expect(validateBrackets("{}(){}")).toBe(true);
    expect(validateBrackets("()[[Extra Characters]]")).toBe(true);
    expect(validateBrackets("(){}[[]]")).toBe(true);
    expect(validateBrackets("{}{Code}[Fellows](())")).toBe(true);
  });

  it("false for uncorrect brackets", () => {
    expect(validateBrackets("[({}]")).toBe(false);
    expect(validateBrackets("(]")).toBe(false);
    expect(validateBrackets("{(})")).toBe(false);
  });

  it(" false for unmatched  brackets", () => {
    expect(validateBrackets("{")).toBe(false);
    expect(validateBrackets(")")).toBe(false);
    expect(validateBrackets("[}")).toBe(false);
  });
});
