const {test,expect} = require('@playwright/test')

test("mousehover", async ({page}) =>{

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByPlaceholder("Enter Email").fill("admin@email.com");
    await page.getByPlaceholder("Enter Password").fill("admin@123");
    await page.locator(".submit-btn").click();
    await page.locator("//span[text()='Manage']").hover();
    await page.locator("//img[@alt='manage course']").click();

    await page.waitForTimeout(3000);
})