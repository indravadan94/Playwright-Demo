const {test,expect} = require('@playwright/test')
const { assert } = require('console')

    test.use({ viewport: { width: 800, height: 600 } });


test("VerifyErrorMsg", async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").fill("Admin")

    await page.locator("//input[@name='password']").fill("admin1234")

    await page.locator("//button[@type='submit']").click(); 

   const errorMessage =  await page.getByText("Invalid credentials").textContent();

   console.log("Error Message is: "+errorMessage);

   expect(errorMessage.includes("Invalid")).toBeTruthy();

   console.log( await page.viewportSize().width);
   
    console.log(await page.viewportSize().height); 


})