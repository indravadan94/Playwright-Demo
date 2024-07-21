const {test,expect} = require('@playwright/test')

test("keyboard event", async ({page}) => {
    await page.goto("https://www.google.com");
  /*  await page.locator("#APjFqb").fill("Indravadan Shrimali");
    //await page.keyboard.press("Enter");
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    */
    await page.locator("#APjFqb").focus();

    await page.keyboard.type("Indravadan Shrimali!");

    await page.keyboard.press("ArrowLeft");

    await page.keyboard.down("Shift");

    for(let i=0;i<8;i++){
        await page.keyboard.press("ArrowLeft");
    }

    await page.keyboard.up("Shift");

    await page.keyboard.press("Backspace");
    
    await page.waitForTimeout(3000);
})
