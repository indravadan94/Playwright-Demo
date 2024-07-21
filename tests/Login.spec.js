const {test,expect} = require("@playwright/test")
const LoginPage= require("../pages/LoginPage")
const HomePage = require("../pages/HomePage")


test('Validate Login', async ({page}) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const objLoginPage = new LoginPage(page);
    const objHomePage = new HomePage(page);
    await objLoginPage.loginToApplication();
    //await page.waitForTimeout(3000)

    await objHomePage.verifyManageOption();
    await objHomePage.logoutFromApplication();
   // await page.waitForTimeout(2000);

















    /*
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.getByPlaceholder("Username").fill("Admin")

await page.locator("//input[@name='password']").fill("admin123")

await page.locator("//button[@type='submit']").click();

await expect(page).toHaveURL(/dashboard/)

await page.locator("//img[@class='oxd-userdropdown-img']").click();

await page.getByText("Logout").click();

await expect(page).toHaveURL(/login/)
*/

})