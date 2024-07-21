const {test,expect} = require('@playwright/test');


test("handle alert", async ({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    
    await page.waitForTimeout(2000);
    page.on("dialog", async (d) => {
        
        expect(d.type()).toContain("prompt");
       
      //  expect(d.message()).toContain("I am a JS Alert");
       
        await d.accept("Indravadan Shrimali");
        

         })

    await page.locator("button[onclick='jsPrompt()']").click();
    
    await page.waitForTimeout(3000);
})



test("handle frame", async ({page}) =>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/");

    const iframe = page.frameLocator("//frame[@name='packageListFrame']");

    iframe.locator("//a[text()='java.applet']").click();

   await page.waitForTimeout(3000);

})
