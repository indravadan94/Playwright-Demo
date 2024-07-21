const {test,expect} = require('@playwright/test')

test("Handle Windows", async ({browser}) =>{
    const context = await browser.newContext();
    const page =  await context.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/Login");
    
    const [newPage] =  await Promise.all([

         context.waitForEvent("page"),

         page.locator("//div[@class='container-child']//a[4]").click()

    ]);

    await newPage.locator("//input[@aria-label='Email or phone number']").fill("Indravadan@gmail.com")

    await newPage.waitForTimeout(5000);

    await newPage.close();

    await page.locator("//input[@id='email1']").fill("indravadan@gmail.com")

    await page.waitForTimeout(3000)
})