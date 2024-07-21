const {test,expect} = require('@playwright/test')

test("upload file", async ({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("//input[@id='file-upload']").setInputFiles("C:/Users/shrimin/OneDrive - Manulife/Documents/firsttask.txt")

    await page.locator("#file-submit").click();

expect (await page.locator("//h3[normalize-space()='File Uploaded!']")).toHaveText("File Uploaded!")



await page.waitForTimeout(3000);

})