import { test, expect } from "@playwright/test";

test.describe("Login tests. Negative cases", () => {
  test("check with invalid symbols in Username", async ({ page }) => {
    await page.goto("https://stable.opencast.org/login.html");
    await page.waitForLoadState("domcontentloaded");
    const user = "~!@#$%&*()-_+=[],./<>?/| ^:{}`'";
    await page.getByPlaceholder("Username").fill(user, { timeout: 20000 });
    await page.getByPlaceholder("Password").fill("password");
    await page.getByText("Login").click({ timeout: 2000 });
    await page.waitForURL(`https://stable.opencast.org/login.html**?error`);
    await expect(
      page.getByText("Incorrect username and / or password")
    ).toBeAttached({ timeout: 2000 });
  });

  //TODO: make tests with empty field(s)
  //TODO: make tests with min size in field
  //TODO: make tests with max size in field
  //TODO: make usable .env vars.
});
