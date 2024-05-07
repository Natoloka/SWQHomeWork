import { test, expect } from "@playwright/test";

test.describe("Login tests. Positive cases", () => {
  test("login with success", async ({ page }) => {
    await page.goto("https://stable.opencast.org/login.html");
    await page.waitForLoadState("domcontentloaded");
    await page.getByPlaceholder("Username").fill("admin", { timeout: 20000 });
    await page.getByPlaceholder("Password").fill("opencast");
    await page.getByText("Login").click({ timeout: 2000 });
    //TODO: finish checks on the redirected page.
    //TODO: refactor code to use PageObjects
  });
});
